import express from "express";
import {getProducts, indexProducts} from "./actions";

export const router = express.Router();

router.get("/",getProducts);
router.post("/index",indexProducts);
