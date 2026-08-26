import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import cron from "node-cron"
import {updateProducts} from "./actions";

dotenv.config({ path : "envs/.env.scheduler" , override : false });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT : number = Number(process.env.PORT) || 5000;

async function start()
{
    try
    {
        cron.schedule('0 */5 * * * *',async () => {

            await updateProducts();
        })
    }
    catch(err)
    {
        console.log(`Failed to start: ${JSON.stringify(err)}`);
    }
}

app.listen(PORT, async () => {
    await start();
    console.log(`[Scheduler Service] : Scheduler Service started on port ${PORT}`);
})
