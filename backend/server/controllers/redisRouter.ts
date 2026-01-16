import express from "express";
import {redisConnector} from "../../connectors/redis";
export const redisRouter = express.Router();

// GET: /redis/get-quantity/1
redisRouter.get('/get-quantity/:id', async (req, res) => {
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
});

// POST: /redis/set-quantity з тілом { "id": "1", "quantity": 10 }
redisRouter.post('/set-quantity/:id', async (req, res) => {
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
});