import express from "express";
import {getProducts} from "./actions";

export const router = express.Router();

router.get("/",getProducts);
