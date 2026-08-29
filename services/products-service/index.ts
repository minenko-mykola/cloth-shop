import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {kafkaConsumer, kafkaProducer} from "./messages";
import mongoose from "mongoose";
import {createRouter, updateRouter} from "./routers";

const app = express();
dotenv.config({ path: "envs/.env.products", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",router)

app.use("/create", createRouter);
app.use("/update", updateRouter);

const PORT : number = Number(process.env.PORT) || 8000;
const TOPIC : string = process.env.TOPIC || "products";
const MONGODB_URL = process.env.DB_URL || "mongodb://user_name:user_password@mongodb:27017/db_name?authSource=admin";

async function start() : Promise<void>
{
    try
    {
        const result = await mongoose.connect(MONGODB_URL)

        await kafkaConsumer.connect();
        await kafkaProducer.connect();

        await kafkaConsumer.subscribe({ topic : TOPIC, fromBeginning : true })
        await kafkaConsumer.run();

        console.log(`Synchronized!!!`)
    }
    catch(err)
    {
        console.log(`Error:${err}`)
    }
}

app.listen(PORT, async () => {
    await start();
    console.log(`[Products Service] : Products Service started on port ${PORT}`);
})