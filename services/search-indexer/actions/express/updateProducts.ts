import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "envs/.env.indexer", override : false });

const LIMIT = Number(process.env.LIMIT) || 1000;

export async function updateProducts(req: express.Request, res: express.Response)
{
    try
    {
        res.status(202).json({
            message : `Successfully started updating products`
        });
    }
    catch(err)
    {
        console.log(`[Search Indexer] Error while updating products:${err}`)
        if(!res.headersSent)
        {
            res.status(500).json({
                message : `Error while updating products:${err}`
            });
        }
    }
}