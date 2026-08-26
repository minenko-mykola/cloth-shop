import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {sequelize} from "./connectors";
import {kafkaConsumer, kafkaProducer} from "./messages";

const app = express();
dotenv.config({ path: "envs/.env.products", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT : number = Number(process.env.PORT) || 8000;
const TOPIC : string = process.env.TOPIC || "products";

async function start() : Promise<void>
{
    try
    {
        await sequelize.authenticate();
        await sequelize.sync({ alter : true });

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