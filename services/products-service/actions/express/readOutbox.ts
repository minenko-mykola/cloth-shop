import express from "express";

export async function readOutbox(req : express.Request, res: express.Response)
{

    try
    {
        res.status(200).json({
            message : "Message was successfully read and sent to Kafka"
        })
    }
    catch(err)
    {
        console.log(`[Products Service] : Error while reading from product-variation outbox:${err}`)
        res.status(500).json({
            message : `Error while reading from product-variation outbox:${err}`
        });
    }
}