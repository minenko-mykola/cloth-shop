import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {kafkaConsumer, kafkaProducer} from "./messages";
import {sequelize} from "./connectors";
import {createIndex} from "./actions/internal";
import mongoose from "mongoose";

const app = express();
dotenv.config({ path: "envs/.env.indexer", override: false });
dotenv.config({ path: "envs/.env.mongo", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT = Number(process.env.PORT) || 8000;
const TOPIC = process.env.TARGET_TOPIC || "products";
const MONGO_URL = process.env.DB_URL || "mongodb://your_secret_user:your_secret_password@mongodb:27017/logs?authSource=admin";

async function start()
{
    try
    {
        await sequelize.authenticate();
        await mongoose.connect(MONGO_URL);
        const result = await createIndex()

        await kafkaProducer.connect()
        await kafkaConsumer.connect()

        await kafkaConsumer.subscribe({ topic : TOPIC, fromBeginning : true })
        await kafkaConsumer.run();
    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while starting service:${err}`)
    }
}

app.listen(PORT, async () => {

    await start()
    console.log(`[Search Indexer] : Search Indexer started on port ${PORT}`);
})