import express from "express";
import {
    productRouter,
    authRouter,
    searchRouter,
    espoCrmRouter,
    redisRouter,
    kafkaRouter
} from "./controllers";
import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";

import passport from "passport";
import { passport as _passport } from "../config/passport-config";
import {esService, dbService, crmService, redisService} from "../services";

dotenv.config({ path: "config/envs/.env.mysql", override: false });
dotenv.config({ path: "config/envs/.env.hashing", override: false });

const app = express();

app.use(express.json());
app.use("/uploads/photos", express.static(path.join(__dirname, "../photos")));
app.use(cors());

// Ініціалізація Passport
_passport(passport);

// Роути
app.use("/api/products", productRouter);
app.use("/api/user", authRouter);
app.use("/api/search", searchRouter);
app.use("/api/espo-crm", espoCrmRouter);
app.use("/api/redis", redisRouter);
app.use("/api/kafka", kafkaRouter);

async function run() {
    try {
        const updateTime = Number(process.env.UPDATE_TIME) || 5;

        await dbService.run();
        await esService.run();
        await crmService.run();
        await redisService.run();

        console.log(`Update time:${ updateTime}`);
        await esService.scheduleSync(updateTime);
        await redisService.scheduleSync(updateTime);

    } catch (err) {
        console.error('CRITICAL ERROR DURING STARTUP:', err);
        process.exit(1);
    }
}

// Запуск сервера
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    run().catch((err) => console.error("Run function failed", err));
});