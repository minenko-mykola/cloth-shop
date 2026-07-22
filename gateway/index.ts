import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";

dotenv.config({ path: "envs/.env.backend", override: false });

const app = express();

app.use(express.json());
app.use("/uploads/photos", express.static(path.join(__dirname, "../photos")));
app.use(cors());

const PORT = process.env.PORT || 6000;
const ANALITYCS_TOPIC : string = process.env.ANALITYCS_TOPIC || "analytics-topic"
const NOTIFICATIONS_TOPIC : string = process.env.NOTIFICATIONS_TOPIC || "notifications-topic"
const SEARCH_INDEX_TOPIC : string = process.env.SEARCH_INDEX_TOPIC || "search-index-topic"

async function start()
{
    try{

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