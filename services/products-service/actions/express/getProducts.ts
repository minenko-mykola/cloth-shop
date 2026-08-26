import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "envs/.env.products", override : false });

const SERVICE_NAME = process.env.SERVISE_NAME || "products-service";

export async function getProducts(req: express.Request, res: express.Response)
{
    let limit = Number(req.query.limit) || -1;
    let offset = String(req.query.offset) || "";

    if(limit <= 0)
    {
        res.status(400).json({
            limit : limit
        });
        return;
    }

    try
    {

        res.status(200).json({
            message : `test`,
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : `Error while getting products:${err}`
        })
        return;
    }
}