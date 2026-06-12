import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import {sequelize} from "../connectors/sequelize";
import passport from "passport";
import path from "node:path";

dotenv.config({ path: "config/envs/.env.backend", override: false });

const app = express();

app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())

app.use("/uploads/photos", express.static(path.join(__dirname, "../photos")));
app.use(cors());

async function start()
{
    try
    {
        await sequelize.authenticate()
        await sequelize.sync()

        console.log(`Synchronized!!!`)
    }
    catch(err)
    {
        console.log(`Error:${err}`)
        throw err
    }
}

// Запуск сервера
const PORT = process.env.PORT || 6000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    await start();


});//5000