import express from 'express';
import dotenv from "dotenv";

import {authActions} from "../actions";

dotenv.config({ path: "config/envs/.env.hashing", override: false });

export const authRouter = express.Router();

authRouter.post('/register',authActions.register);

authRouter.post('/login',authActions.login);

authRouter.get('/get/:id',authActions.getById)

authRouter.post("/logout", authActions.logout)