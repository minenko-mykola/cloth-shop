import express from "express";
import {redisConnector} from "../../connectors/redis";

class RedisActions
{
    async getQuantity(req : express.Request, res : express.Response)
    {
        const { id } = req.params;
        const key = `ProductInfo:${id}`;

        try {
            let candidate = await redisConnector.hGetAll(key)
            console.log(JSON.stringify(candidate,null, 2));
            res.status(200).send({
                quantity: candidate.quantity
            });
        }
        catch (err: any) {
            res.status(500).send({ error: err.message });
        }
    }

    async setQuantity(req : express.Request, res : express.Response)
    {
        const {id} = req.params;
        const { quantity } = req.body;

        try
        {
            res.status(200).send({ message : `ID:${id}, quantity:${quantity}`})
        }
        catch(err)
        {
            res.status(500).send({ message : `Something went wrong: ${err}` });
        }
    }
}

export const redisActions = new RedisActions();