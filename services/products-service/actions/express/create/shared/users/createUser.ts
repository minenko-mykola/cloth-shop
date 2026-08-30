import express from "express";
import {validationResult} from "express-validator";
import {Users} from "../../../../../entities/mongoose/users";

export async function createUser(req : express.Request, res : express.Response)
{
    try
    {
        const {name,surname,login,password,taxNumber,organisation} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await Users.findOne({
            name : name,
            surname : surname,
            login : login,
            password : password
        })

        if(!candidate)
        {
            const head =  await Users.create({
                name : name,
                surname : surname,
                login : login,
                password : password
            });

            res.status(200).json({
                message: 'User created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'User has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating user:${err}`);
        res.status(500).json({
            message : `Error while creating user:${err}`
        });
    }
}