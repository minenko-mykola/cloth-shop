import express from "express";
import {validationResult} from "express-validator";
import {Heads} from "../../../../../entities/mongoose/users";

export async function createHead(req : express.Request, res : express.Response)
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

        const candidate = await Heads.findOne({
            name : name,
            surname : surname,
            login : login,
            password : password,
            taxNumber : taxNumber,
            organisation : organisation
        })

        if(!candidate)
        {
            const head =  await Heads.create({
                name : name,
                surname : surname,
                login : login,
                password : password,
                taxNumber : taxNumber,
                organisation : organisation
            });

            res.status(200).json({
                message: 'Head created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Head has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating head:${err}`);
        res.status(500).json({
            message : `Error while creating head:${err}`
        });
    }
}