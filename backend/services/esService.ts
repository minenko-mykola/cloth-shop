import {esClient, Updater} from "../elastic-search";

class EsService
{
    private updater = new Updater();

    async run() {
        let esReady = false;
        const LIMIT = Number(process.env.LIMIT) || 100;
        let tries = 0;
        console.log("Waiting for Elasticsearch to be fully ready...");

        while (!esReady) {
            try {
                tries += 1;
                await esClient.ping();
                esReady = true;
                console.log(`Elasticsearch is UP and synchronized!`);
            } catch (esError) {
                if (tries > LIMIT) {
                    console.error(`Elasticsearch is NOT available after ${tries} attempts. Exiting...`);
                    process.exit(1)
                }
                console.log(`Elasticsearch not ready (Attempt ${tries}/${LIMIT}), retrying in 5s...`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }

        console.log("--- [Start-up] Running initial full data indexing ---");
        await this.updater.updateData();
        console.log("--- [Start-up] Initial indexing finished successfully ---");
    }

    async scheduleSync(timeInMinutes: number) {
        try {
            console.log(`[${new Date().toLocaleTimeString()}] Starting incremental update...`);
            await this.updater.incrementalUpdate();
            console.log(`[${new Date().toLocaleTimeString()}] Incremental update finished.`);
        } catch (err) {
            console.error('[Scheduler Error]: Incremental update failed:', err);
        } finally {
            const delay = timeInMinutes * 60 * 1000;
            console.log(`[Scheduler]: Next sync in ${timeInMinutes} minutes.`);
            setTimeout(() => this.scheduleSync(timeInMinutes), delay);
        }
    }
}

export const esService = new EsService();