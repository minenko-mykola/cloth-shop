import fs from 'fs';
import path from 'path';
import { ProductInfo } from "../entities/database/additional";
import { Op } from "sequelize";
import { productInfoRepository } from "../entities/database/redis";
import {redisConnector} from "../connectors/redis";

export class Updater {
    private readonly STATE_FILE = path.join(__dirname, '../config/redis-last-sync.json');

    async updateData() {
        console.log("--- [Redis] Starting Full Sync ---");
        await productInfoRepository.dropIndex();
        await productInfoRepository.createIndex();
        await this.syncInBatches();
        this.saveTimestamp(new Date());
    }

    async incrementalUpdate() {
        const lastSync = this.getLastTimestamp();
        const startTime = new Date();
        console.log(`--- [Redis] Incremental Sync since: ${lastSync.toISOString()} ---`);

        // 1. Оновлення та нові записи
        const toUpdate = await ProductInfo.findAll({
            where: {
                updatedAt: { [Op.gt]: lastSync },
                ...(ProductInfo.rawAttributes.deletedAt && { deletedAt: null })
            },
            attributes: ["id", "name", "quantity"],
            paranoid: false
        });

        if (toUpdate.length > 0) {
            await this.performBulk(toUpdate);
            console.log(`[Redis] Updated ${toUpdate.length} records.`);
        }

        // 2. Видалення (Soft Deletes)
        if (ProductInfo.rawAttributes.deletedAt) {
            const toDelete = await ProductInfo.findAll({
                where: { deletedAt: { [Op.gt]: lastSync } },
                attributes: ['id'],
                paranoid: false
            });

            if (toDelete.length > 0) {
                await this.performBulkDelete(toDelete);
                console.log(`[Redis] Removed ${toDelete.length} records.`);
            }
        }

        this.saveTimestamp(startTime);
    }

    private async syncInBatches() {
        const limit = 500;
        let offset = 0;

        while (true) {
            const items = await ProductInfo.findAll({
                limit,
                offset,
                attributes: ["id", "name", "quantity"],
                order: [['id', 'ASC']], // Важливо для стабільної пагінації
                paranoid: false
            });

            if (items.length === 0) break;
            await this.performBulk(items);

            offset += limit;
            console.log(`[Product Info] Full sync progress: ${offset} records...`);
        }
    }

    /**
     * Збереження в Redis
     */
    private async performBulk(items: any[]) {
        // Використовуємо Promise.all для паралельного запису
        await Promise.all(
            items.map(async (item) => {
                const key = `ProductInfo:${item.id}`;
                await redisConnector.hSet(key,{
                    name : item.name,
                    quantity : item.quantity
                })
            })
        );
    }

    /**
     * Видалення з Redis
     */
    private async performBulkDelete(items: any[]) {
        await Promise.all(
            items.map(item => productInfoRepository.remove(item.id.toString()))
        );
    }

    // --- Робота з міткою часу ---
    private getLastTimestamp(): Date {
        if (fs.existsSync(this.STATE_FILE)) {
            try {
                const data = JSON.parse(fs.readFileSync(this.STATE_FILE, 'utf-8'));
                return new Date(data.lastRun);
            } catch (e) {
                return new Date(Date.now() - 24 * 60 * 60 * 1000);
            }
        }
        return new Date(Date.now() - 24 * 60 * 60 * 1000);
    }

    private saveTimestamp(date: Date) {
        const dir = path.dirname(this.STATE_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(this.STATE_FILE, JSON.stringify({ lastRun: date.toISOString() }));
    }
}