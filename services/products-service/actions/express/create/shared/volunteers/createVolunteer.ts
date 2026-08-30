import express from "express";
import {validationResult} from "express-validator";
import {Volunteers} from "../../../../../entities/mongoose/users";

export async function createVolunteer(req : express.Request, res : express.Response)
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

        const candidate = await Volunteers.findOne({
            name : name,
            surname : surname,
            login : login,
            password : password,
            taxNumber : taxNumber,
            organisation : organisation
        })

        if(!candidate)
        {
            const volunteer =  await Volunteers.create({
                name : name,
                surname : surname,
                login : login,
                password : password,
                taxNumber : taxNumber,
                organisation : organisation
            });

            res.status(200).json({
                message: 'Volunteer created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Volunteer has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating volunteer:${err}`);
        res.status(500).json({
            message : `Error while creating volunteer:${err}`
        });
    }
}