import express from "express";
import {actions} from "./controller";

export const router = express.Router();

router.get('/es-index',actions.esIndex);