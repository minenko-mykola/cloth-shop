import express from "express";
import {validationResult} from "express-validator";
import {uuidv7} from "uuidv7";

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
        const {variationId,modelId,size,price,quantity} = req.body;

        console.log("[Products Service] Successfully written to outbox:")

        res.status(200).json({
            message : "Message was successfully written to outbox"
        })
    }
    catch(err)
    {
        console.log(`[Products Service] : Error while writing to outbox:${err}`)
        res.status(500).json({
            message : `Error while writing to outbox:${err}`
        });
    }
}