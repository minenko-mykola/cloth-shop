import express from "express";
import {searchActions} from "../actions";

export const searchRouter = express.Router();

searchRouter.get('/',searchActions.getAll);
