import express from "express";
import {createBlouse, createBlouseSchema} from "../actions/express/create";

export const createRouter = express.Router();
createRouter.post("/blouse",createBlouseSchema,createBlouse)