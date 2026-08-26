import express from "express";
import {indexAll, updateProducts} from "./actions/express";

export const router = express.Router();

router.get('/index-all',indexAll);
router.get('/update-products',updateProducts);