import express from "express";
import {getProducts} from "./actions/express";

export const router = express.Router();

router.get("/",getProducts);
