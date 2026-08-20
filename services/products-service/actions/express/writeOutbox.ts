import express from "express";
import {validationResult} from "express-validator";

export async function writeOutbox(req : express.Request, res: express.Response)
{
    const result = validationResult(req);

    if(!result.isEmpty())
    {
        res.status(400).json({
            message : result.array()
        });
        return;
    }

    try
    {
        res.status(200).json({
            message : "Message was successfully written to product-variation outbox"
        })
    }
    catch(err)
    {
        console.log(`[Products Service] : Error while writing to product-variation outbox:${err}`)
        res.status(500).json({
            message : `Error while writing to product-variation outbox:${err}`
        });
    }
}