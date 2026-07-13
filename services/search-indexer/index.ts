import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {kafkaConsumer, kafkaProducer} from "./messages";

const app = express();
dotenv.config({ path: "envs/.env.indexer", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT : number = Number(process.env.PORT) || 8000;
const TOPIC : string = process.env.TARGET_TOPIC || "products-service";

async function start()
{
    await kafkaProducer.connect()
    await kafkaConsumer.connect()
}

app.listen(PORT, async () => {

    await start()
    console.log(`[Search Indexer] : Search Indexer started on port ${PORT}`);
})