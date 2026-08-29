import express from "express";
import {validationResult} from "express-validator";
import {Blouse} from "../../../../entities/mongoose/blouses";

export async function createBlouse(req : express.Request, res : express.Response)
{
    try
    {
        const {name,description,price,quantity,size,back,collar,style,fasteners,length,sleeve,season} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await Blouse.findOne({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            size: size,
            back: back,
            collar: collar,
            style: style,
            fasteners: fasteners,
            length: length,
            sleeve: sleeve,
            season: season
        })

        if(!candidate)
        {
            const blouse =  await Blouse.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                size: size,
                back: back,
                collar: collar,
                style: style,
                fasteners: fasteners,
                length: length,
                sleeve: sleeve,
                season: season
            });

            await blouse.save();

            res.status(200).json({
                message: 'Blouse created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Blouse has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating blouse:${err}`);
        res.status(500).json({
            message : `Error while creating blouse:${err}`
        });
    }
}