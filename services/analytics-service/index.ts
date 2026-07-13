import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {logsRepository, redisClient} from "./redis/logs";
import {sessionRepository} from "./redis/sessions";
import {esEosRepository} from "./redis/es-eos";

dotenv.config({ path : "envs/.env.analytics" , override : false });
dotenv.config({ path: "envs/.env.redis",override : false });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT : number = Number(process.env.PORT) || 5000;
const TOPIC : string = process.env.TOPIC || "reserve-analytics";

async function start()
{
    try
    {
        await redisClient.connect();
        console.log(await redisClient.ping());

        await logsRepository.createIndex();
        await sessionRepository.createIndex();
        await esEosRepository.createIndex();

        await logsRepository.expire("id",60 * 60);
        await sessionRepository.expire("id",60 * 15)
        await esEosRepository.expire("id",60 * 60)
    }
    catch(err)
    {
        console.log(`Failed to start: ${JSON.stringify(err)}`);
    }
}

app.listen(PORT, async () => {
    await start();
    console.log(`[Analytics Service] : Analytics Service started on port ${PORT}`);
})
