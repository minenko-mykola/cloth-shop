import {redisConnector} from "../connectors/redis";
import {Updater} from "../redis"

class RedisService
{
    private updater = new Updater();

    async run()
    {
        let redisReady = false;
        const LIMIT = Number(process.env.LIMIT) || 100;
        let tries = 0;

        console.log("Waiting for Redis to be fully ready...");

        while (!redisReady) {
            try {
                tries += 1;

                if(!redisConnector.isOpen)
                {
                    await redisConnector.connect();
                }

                await redisConnector.ping();

                redisReady = true;
                console.log("Redis is UP and connected!");

            } catch (crmError) {
                if (tries > LIMIT) {
                    console.error(`Redis is NOT available after ${tries} attempts. Exiting...`);
                    process.exit(1);
                }
                console.log(`Redis not ready (Attempt ${tries}/${LIMIT}). Retrying in 5s...`);
                console.log(`Error: ${crmError}`);

                if (redisConnector.isOpen) {
                    await redisConnector.disconnect();
                }

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

export const redisService = new RedisService();