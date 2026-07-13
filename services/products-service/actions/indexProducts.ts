import express from "express";
import {esClient} from "../connectors/esClient";

export async function indexProducts(req: express.Request, res: express.Response)
{
    const {products} = req.body;

    const operations = products.flatMap((p : any) => [{ index: { _index: 'products' } }, p])

    try{
        const result = await esClient.bulk({
            refresh : true,
            operations
        })

        res.status(200).json({
            status: "success",
        })
    }
    catch(err)
    {
        console.log("Error while indexing product:",err);
        res.status(500).json({
            status: "failed",
        })
    }
}