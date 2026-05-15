import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {kafkaMessageConsumer, kafkaMessageProducer, kafkaTopicsManager} from "./messages";

const app = express();
dotenv.config({ path: "envs/.env.indexer", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT : number = Number(process.env.PORT) || 8000;
const TOPIC : string = process.env.TOPIC || "reserve-search-index";

async function start() : Promise<void>
{
    try{
        await kafkaTopicsManager.createTopic(TOPIC);
        await kafkaMessageConsumer.subscribe([TOPIC]);

        await kafkaMessageProducer.connect();
        await kafkaMessageConsumer.startReading();

    }
    catch(err)
    {
        console.log(`Failed to start Kafka: ${err}`);
    }
}

app.listen(PORT, async () => {
    await start();
    console.log(`[Search Indexer] : Search Indexer started on port ${PORT}`);
})