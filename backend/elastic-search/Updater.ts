import fs from 'fs';
import path from 'path';
import { Op } from 'sequelize';
import { esClient } from "./index";
import { models } from "../data";

export class Updater {
    private readonly STATE_FILE = path.join(__dirname, '../config/es-last-sync.json');

    /**
     * ПОВНА СИНХРОНІЗАЦІЯ (з лімітами)
     */
    async updateData() {
        console.log("--- [ES] Starting Full Sync ---");
        for (const modelEntry of models) {
            await this.syncInBatches(modelEntry.model, modelEntry.index);
        }
        this.saveTimestamp(new Date());
    }

    /**
     * ІНКРЕМЕНТАЛЬНЕ ОНОВЛЕННЯ + ВИДАЛЕННЯ
     */
    async incrementalUpdate() {
        const lastSync = this.getLastTimestamp();
        const startTime = new Date();
        console.log(`--- [ES] Incremental Sync since: ${lastSync.toISOString()} ---`);

        for (const modelEntry of models) {
            const model = modelEntry.model as any;

            // 1. Обробка НОВИХ та ОНОВЛЕНИХ записів
            const toUpdate = await model.findAll({
                where: {
                    updatedAt: { [Op.gt]: lastSync },
                    // Якщо використовуєте Soft Deletes, ігноруємо видалені тут
                    ...(model.rawAttributes.deletedAt && { deletedAt: null })
                },
                include: [{ all: true, nested: true }]
            });

            if (toUpdate.length > 0) {
                await this.performBulk(modelEntry.index, toUpdate);
                console.log(`[${modelEntry.index}] Updated ${toUpdate.length} records.`);
            }

            // 2. Обробка ВИДАЛЕНИХ записів (Soft Deletes)
            if (model.rawAttributes.deletedAt) {
                const toDelete = await model.findAll({
                    where: { deletedAt: { [Op.gt]: lastSync } },
                    attributes: ['id'],
                    paranoid: false // Дозволяє бачити видалені записи
                });

                if (toDelete.length > 0) {
                    await this.performBulkDelete(modelEntry.index, toDelete);
                    console.log(`[${modelEntry.index}] Removed ${toDelete.length} records.`);
                }
            }
        }
        this.saveTimestamp(startTime);
    }

    /**
     * Допоміжний метод для повної синхронізації з пагінацією (лімітами)
     */
    private async syncInBatches(model: any, index: string) {
        const limit = 500;
        let offset = 0;

        while (true) {
            const items = await model.findAll({
                limit,
                offset,
                include: [{ all: true, nested: true }]
            });

            if (items.length === 0) break;
            await this.performBulk(index, items);

            offset += limit;
            console.log(`[${index}] Full sync progress: ${offset} records...`);
        }
    }

    /**
     * Відправка даних в ES
     */
    private async performBulk(index: string, items: any[]) {
        const operations = items.flatMap(item => [
            { index: { _index: index, _id: item.id.toString() } },
            item.get({ plain: true })
        ]);
        await esClient.bulk({ refresh: true, operations });
    }

    /**
     * Видалення даних з ES
     */
    private async performBulkDelete(index: string, items: any[]) {
        const operations = items.map(item => ({
            delete: { _index: index, _id: item.id.toString() }
        }));
        await esClient.bulk({ refresh: true, operations });
    }

    // --- Робота з міткою часу ---
    private getLastTimestamp(): Date {
        if (fs.existsSync(this.STATE_FILE)) {
            return new Date(JSON.parse(fs.readFileSync(this.STATE_FILE, 'utf-8')).lastRun);
        }
        return new Date(Date.now() - 24 * 60 * 60 * 1000);
    }

    private saveTimestamp(date: Date) {
        fs.writeFileSync(this.STATE_FILE, JSON.stringify({ lastRun: date.toISOString() }));
    }
}