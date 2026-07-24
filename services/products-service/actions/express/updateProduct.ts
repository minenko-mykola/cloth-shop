import express from "express";
import {validationResult} from "express-validator";

export async function updateProduct(req : express.Request, res: express.Response)
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
            message : "Message was successfully sent to Kafka",
            key : req.body.id
        })
    }
    catch(err)
    {
        console.log(`[Products Service] : Error while updating product:${err}`)
        res.status(500).json({
            message : `Error while updating product:${err}`
        });
    }
}