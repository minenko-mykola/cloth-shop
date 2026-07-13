import express from "express";
import dotenv from "dotenv";
import {router} from "./router";
import {sequelize} from "./connectors";
import {esClient} from "./connectors/esClient";
import {createIndex} from "./actions";
import {kafkaConsumer, kafkaProducer, processBatch} from "./messages";

const app = express();
dotenv.config({ path: "envs/.env.products", override: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT : number = Number(process.env.PORT) || 8000;
const TOPIC : string = process.env.TOPIC || "products-service";

async function start() : Promise<void>
{
    try
    {
        await sequelize.authenticate();
        await sequelize.sync();
        await createIndex();
        await kafkaProducer.connect();
        await kafkaConsumer.subscribe({ topic : TOPIC, fromBeginning : true })
        await kafkaConsumer.run({
            eachBatch : processBatch,
            partitionsConsumedConcurrently : 1,
            autoCommit : false
        })
        console.log("ES ping result:",await esClient.ping())
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
    console.log(`[Products Service] : Products Service started on port ${PORT}`);
})