import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import {kafkaProducer} from "../messages";
import {uuidv7} from "uuidv7";

dotenv.config({ path: "envs/.env.indexer", override: false });
const TOPIC : string = process.env.TARGET_TOPIC || "reserve-products-service";
const LIMIT : number = Number(process.env.LIMIT) || 1000;
const SERVICE_NAME : string = process.env.SERVICE_NAME || "search-indexer";

async function indexByBatch()
{
    let batch = []
    let offset = ""
    let iteration = 1;
    const ids : any[] = []

    do
    {
        const response = await axios.get("http://products-service:8004", {
            params: {
                limit: LIMIT,
                offset: offset
            }
        });

        batch = JSON.parse(response.data.message);

        // console.log("Batch:", batch);

        if(batch.length > 0)
        {
            offset = batch[batch.length - 1].id

            const messages = batch.map((item : any) => ({ //O(M)
                value: JSON.stringify(item),
                key : iteration
            }));

            await kafkaProducer.send({
                messages: messages,
                topic: TOPIC
            })

        }

        console.log("Iteration:",iteration)

        iteration++;
    }
    while(batch.length !== 0);
}

export async function indexAll(req : express.Request, res : express.Response)
{
    let response = undefined;
    let operationId = uuidv7();

    try
    {
        response = await axios.post("http://analytics-service:8001/write-operation", {
            operationId : operationId,
            name : SERVICE_NAME,
            status : "started"
        })

        res.status(202).json({
            message : "Started indexing all products",
            operationId : operationId
        });

        await indexByBatch();

        response = await axios.post("http://analytics-service:8001/write-operation", {
            operationId : operationId,
            name : SERVICE_NAME,
            status : "completed"
        })
    }
    catch(err)
    {
        response = await axios.post("http://analytics-service:8001/write-operation", {
            operationId : operationId,
            name : SERVICE_NAME,
            status : "failed"
        })

        if(!res.headersSent)
        {
            res.status(500).json({
                message : `Error while getting all products:${err}`,
            })
        }
        console.log(`Error while indexing all products:${err}`)
    }
}