import axios from "axios";

class CrmService
{
    async run()
    {
        let crmReady = false;
        const LIMIT = Number(process.env.LIMIT) || 100;
        let tries = 0;

        console.log("Waiting for EspoCRM to be fully ready...");

        while (!crmReady) {
            try {
                tries += 1;
                await axios.get("http://espocrm/api/v1/Settings");
                crmReady = true;
                console.log("EspoCRM is UP and connected!");

            } catch (crmError) {
                if (tries > LIMIT) {
                    console.error(`EspoCRM is NOT available after ${tries} attempts. Exiting...`);
                    process.exit(1);
                }
                console.log(`EspoCRM not ready (Attempt ${tries}/${LIMIT}). Retrying in 5s...`);
                console.log(`Error: ${crmError}`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
    }
}

export const crmService = new CrmService();