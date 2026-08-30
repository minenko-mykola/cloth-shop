import express from "express";
import {validationResult} from "express-validator";
import {Gloves} from "../../../../entities/mongoose/gloves";

export async function createGloves(req : express.Request, res : express.Response)
{
    try
    {
        const {name,description,price,quantity,size,waterProtection,windProtection} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await Gloves.findOne({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            size : size,
            waterProtection : waterProtection,
            windProtection : windProtection
        })

        if(!candidate)
        {
            const gloves =  await Gloves.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                size : size,
                waterProtection : waterProtection,
                windProtection : windProtection
            });

            res.status(200).json({
                message: 'Gloves created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Gloves has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating gloves:${err}`);
        res.status(500).json({
            message : `Error while creating gloves:${err}`
        });
    }
}