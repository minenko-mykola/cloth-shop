import express from "express";
import dotenv from "dotenv";
import {controller} from "./controller";
import mongoose from "mongoose";

const app = express();
dotenv.config({ path: "envs/.env.users", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controller)

const PORT : number = Number(process.env.PORT) || 8000;
const MONGO_URL = process.env.DB_URL || "mongodb://your_secret_user:your_secret_password@mongodb:27017/logs?authSource=admin";

async function start() : Promise<void>
{
    try
    {
        const result = await mongoose.connect(MONGO_URL)
        console.log(`Synchronized!!!`)
    }
    catch(err)
    {
        console.log(`Error:${err}`)
        throw err
    }
}

app.listen(PORT, async () => {
    await start();
    console.log(`[Users Service] : Users Service started on port ${PORT}`);
})