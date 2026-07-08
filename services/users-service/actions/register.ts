import express from "express";
import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import {sequelize} from "../connectors";
import {Users} from "../entities/sequelize";
import {Op} from "sequelize";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {uuidv7} from "uuidv7";

dotenv.config({ path : "envs/.env.hashing" })
const ROUNDS : number = Number(process.env.SALT_ROUNDS) || 12;

export async function register(req : express.Request, res : express.Response) : Promise<void>
{
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            await Promise.reject(errors.array())
        }

        const {name,surname,login,password} = req.body;

        const userId = uuidv7()

        //jwt.sign(payload,key,{
        // expiresIn : ""})

        const refreshToken : string = jwt.sign({ payload : "" },"",{
            expiresIn : "1h"
        })

        const hashedPassword = await bcrypt.hash(password,ROUNDS)

        const result = await sequelize.transaction(async t => {
            const candidate = await Users.findOne({
                where : {
                    [Op.or] : {
                        name : name,
                        surname : surname,
                        login : login
                    }
                },
                transaction : t
            })

            if (candidate)
            {
                res.status(400).json({
                    message : "[Users Controller] User already exists"
                })
                await Promise.reject("User already exists")
            }
            else
            {
                const user = await Users.create({
                    id : userId,
                    name: name,
                    surname: surname,
                    login: login,
                    password: hashedPassword
                },{ transaction : t })
            }
        })
    }
    catch (err)
    {
        res.status(500).json({
            message : `[Users Controller] Error:${err}`,
        })
    }
}