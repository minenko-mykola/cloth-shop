import {getUser} from "./actions";
import express from "express";

export const controller = express.Router();

controller.get("/:id",getUser)