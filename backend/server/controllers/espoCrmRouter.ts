import express from "express";
import {espoCrmActions} from "../actions";

export const espoCrmRouter = express.Router();

espoCrmRouter.post('/login', espoCrmActions.login);