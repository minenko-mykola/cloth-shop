import express from "express";
import {validationResult} from "express-validator";
import {Shirts} from "../../../../entities/mongoose/shirts";

export async function createShirt(req : express.Request, res : express.Response)
{
    try
    {
        const {name,description,price,quantity,size,collar,cut,fabricDensity,fasteners,sleeveLength,type,seasons,sex} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await Shirts.findOne({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            size: size,
            collar : collar,
            cut : cut,
            fabricDensity : fabricDensity,
            fasteners : fasteners,
            sleeveLength : sleeveLength,
            type : type,
            seasons : seasons,
            sex : sex
        })

        if(!candidate)
        {
            const shirt =  await Shirts.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                size: size,
                collar : collar,
                cut : cut,
                fabricDensity : fabricDensity,
                fasteners : fasteners,
                sleeveLength : sleeveLength,
                type : type,
                seasons : seasons,
                sex : sex
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