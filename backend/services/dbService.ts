import {sequelize as normalConnector} from "../connectors/sequelize/sequelizeConnector"


class DbService
{
    async run() {
        let dbReady = false;
        const LIMIT = Number(process.env.LIMIT) || 100;
        let tries = 0;

        console.log("Waiting for Database to be fully ready...");

        while (!dbReady) {
            try {
                tries += 1;
                await normalConnector.authenticate();
                dbReady = true;
                console.log("Database is UP and connected!");

                await normalConnector.sync({alter: true, logging: false});

                console.log("Database models synchronized!");
            } catch (dbError) {
                if (tries > LIMIT) {
                    console.error(`Database is NOT available after ${tries} attempts. Exiting...`);
                    process.exit(1);
                }
                console.log(`Database not ready (Attempt ${tries}/${LIMIT}). Retrying in 5s...`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
    }
}

export const dbService = new DbService();