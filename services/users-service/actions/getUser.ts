import express from "express";
import {validationResult} from "express-validator";

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

    }
    catch (err)
    {
        res.status(500).json({
            message : `[Users Controller] Error:${err}`
        })
    }
}