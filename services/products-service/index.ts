import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {sequelize} from "./connectors"

const app = express();
dotenv.config({ path: "envs/.env.indexer", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

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
    console.log(`[Product Service] : Product Service started on port ${PORT}`);
})