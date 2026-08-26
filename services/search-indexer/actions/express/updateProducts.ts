import express from "express";
import {ProductsOutbox, ProductVariations} from "../../entities/sequelize";
import dotenv from "dotenv";
import {esClient} from "../../connectors/esClient";

dotenv.config({ path: "envs/.env.indexer", override : false });

const LIMIT = Number(process.env.LIMIT) || 1000;

export async function updateProducts(req: express.Request, res: express.Response)
{
    try
    {
        res.status(202).json({
            message : `Successfully started updating products`
        });

        const messages = await ProductsOutbox.findAll({
            where : {
                publishedAt : null
            },
            limit : LIMIT
        })
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