import express from "express";
import {validationResult} from "express-validator";
import {Users} from "../entities/sequelize";

export async function getUser(req : express.Request, res : express.Response) : Promise<void>
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

        const {id} = req.params;

        const candidate = await Users.findOne({
            where : {
                id : id
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
                message : "User doesn't exist"
            })
        }
    }
    catch (err)
    {
        res.status(500).json({
            message : `[Users Controller] Error:${err}`
        })
    }
}