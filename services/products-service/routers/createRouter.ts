import express from "express";
import {
    createBlouse,
    createBlouseSchema,
    createGloves,
    createGlovesSchema,
    createHeadWear,
    createHeadWearSchema,
    createShirt,
    createShirtSchema,
    createTShirt,
    createTShirtSchema,
} from "../actions/express/create";


export const createRouter = express.Router();
createRouter.post("/blouse",createBlouseSchema,createBlouse)
createRouter.post("/gloves",createGlovesSchema,createGloves)
createRouter.post("/headwear",createHeadWearSchema,createHeadWear)
createRouter.post("/shirt",createShirtSchema,createShirt)
createRouter.post("/tshirt",createTShirtSchema,createTShirt)
