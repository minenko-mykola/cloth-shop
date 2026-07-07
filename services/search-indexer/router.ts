import express from "express";
import {indexAll} from "./actions";

export const router = express.Router();

router.get('/index-all',indexAll);