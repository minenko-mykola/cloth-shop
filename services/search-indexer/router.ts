import express from "express";
import {indexProduct} from "./actions";

export const router = express.Router();

router.post('/index-product',indexProduct);