import express from "express";
import dotenv from "dotenv";
import {sequelize} from "./connectors"
import {controller} from "./controller";

const app = express();
dotenv.config({ path: "envs/.env.users", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controller)

const PORT : number = Number(process.env.PORT) || 8000;

async function start() : Promise<void>
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

app.listen(PORT, async () => {
    await start();
    console.log(`[Users Service] : Users Service started on port ${PORT}`);
})