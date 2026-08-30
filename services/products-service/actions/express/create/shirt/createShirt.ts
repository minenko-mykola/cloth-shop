import express from "express";
import {validationResult} from "express-validator";
import {Shirt} from "../../../../entities/mongoose/shirts";

export async function createShirt(req : express.Request, res : express.Response)
{
    try
    {
        const {name,description,price,quantity,size} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await Shirt.findOne({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            size: size
        })

        if(!candidate)
        {
            const shirt =  await Shirt.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                size: size
            });

            res.status(200).json({
                message: 'Shirt created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Shirt has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating shirt:${err}`);
        res.status(500).json({
            message : `Error while creating shirt:${err}`
        });
    }
}