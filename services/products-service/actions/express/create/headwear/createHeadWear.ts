import express from "express";
import {validationResult} from "express-validator";
import {HeadWear} from "../../../../entities/mongoose/headwear";

export async function createHeadWear(req : express.Request, res : express.Response)
{
    try
    {
        const {name,description,price,quantity,headCircumference,type,season,sex,visor,earsClosed,sizeAdjuster,ventilationHoles} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await HeadWear.findOne({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            headCircumference : headCircumference,
            type : type,
            season : season,
            sex : sex,
            visor : visor,
            earsClosed : earsClosed,
            sizeAdjuster : sizeAdjuster,
            ventilationHoles : ventilationHoles
        })

        if(!candidate)
        {
            const headwear =  await HeadWear.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                headCircumference : headCircumference,
                type : type,
                season : season,
                sex : sex,
                visor : visor,
                earsClosed : earsClosed,
                sizeAdjuster : sizeAdjuster,
                ventilationHoles : ventilationHoles
            });

            res.status(200).json({
                message: 'Headwear created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Headwear has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating headwear:${err}`);
        res.status(500).json({
            message : `Error while creating headwear:${err}`
        });
    }
}