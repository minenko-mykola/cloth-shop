import express from "express";
import {validationResult} from "express-validator";
import {sequelize} from "../connectors";
import {Users} from "../entities/sequelize";

export async function login(req : express.Request, res : express.Response) : Promise<void>
{
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const {login,password} = req.body;

        const result = await sequelize.transaction(async t => {
            const candidate = await Users.findOne({
                where : {
                    login : login,
                    password : password
                }
            })

            if (candidate)
            {
                res.status(200).json({
                    user : candidate
                })
            }
            else
            {
                res.status(404).json({
                    message : `[Users Controller] User doesn't exist`
                })
                await t.rollback();
            }
        });
    }
    catch (err)
    {
        res.status(500).json({
            message : `[Users Controller] Error:${err}`,
        })
        return;
    }
}