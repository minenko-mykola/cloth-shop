import express from "express";
import {redisActions} from "../actions";
export const redisRouter = express.Router();

// GET: /redis/get-quantity/1
redisRouter.get('/get-quantity/:id', redisActions.getQuantity);

// POST: /redis/set-quantity з тілом { "id": "1", "quantity": 10 }
redisRouter.post('/set-quantity/:id',redisActions.setQuantity);