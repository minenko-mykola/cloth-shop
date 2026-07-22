import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";
import {kafkaAdmin} from "./messages";
import {createTopic} from "./actions";

dotenv.config({ path: "envs/.env.backend", override: false });

const app = express();

app.use(express.json());
app.use("/uploads/photos", express.static(path.join(__dirname, "../photos")));
app.use(cors());

const PORT = Number(process.env.PORT) || 6000;
const PRODUCTS_TOPIC = process.env.PRODUCTS_TOPIC || "products";

async function start()
{
    try
    {
        await kafkaAdmin.connect();
        await createTopic({
            topic: PRODUCTS_TOPIC
        })
    }
    catch(err)
    {
        console.log(`Failed to start Kafka: ${err}`);
    }
}

// Запуск сервера
app.listen(PORT, async () => {
    await start()
    console.log(`Server is running on port ${PORT}`);


});//5000