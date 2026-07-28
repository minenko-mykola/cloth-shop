import express from "express";
import dotenv from "dotenv";
import {ProductModels} from "../../entities/sequelize";
import {indexBatch, getBatch} from "../internal";
import {uuidv7} from "uuidv7";

dotenv.config({ path: "envs/.env.sequelize", override: false });
const LIMIT : number = Number(process.env.LIMIT) || 1000;

export async function indexAll(req : express.Request, res : express.Response)
{
    let log_id = "";

    try
    {
        // const log = await writeLog({
        //     name: "search-indexer",
        //     operationId: uuidv7(),
        //     status: "started"
        // })

        // log_id = log._id.toString();

        res.status(202).json({
            message : "Started indexing",
            id : log_id
        })

        let batch : ProductModels[] = []
        let offset = ""

        do
        {
            batch = await getBatch(LIMIT,offset)

            if(batch.length > 0)
            {
                offset = batch[batch.length - 1].id!

                await indexBatch(batch)
            }
        }
        while (batch.length !== 0)

        // const result = await updateLog({
        //     id : log_id,
        //     status : "completed"
        // })

    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while indexing all products:${err}`)

        // const result = await updateLog({
        //     id : log_id,
        //     status : "failed"
        // })

        res.status(500).json({
            message : `Error while indexing all products:${err}`
        })
    }
}