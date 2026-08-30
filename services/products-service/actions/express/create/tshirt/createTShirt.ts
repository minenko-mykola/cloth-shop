import express from "express";
import {validationResult} from "express-validator";
import {TShirt} from "../../../../entities/mongoose/tshirts";

export async function createTShirt(req : express.Request, res : express.Response)
{
    try
    {
        const {name,description,price,quantity,size,collar,cut,fabricDensity,fastener,sleeveLength,type,seasons,sex} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            res.status(400).json({
                errors : errors.array()
            })
            return;
        }

        const candidate = await TShirt.findOne({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            size: size,
            collar : collar,
            cut : cut,
            fabricDensity : fabricDensity,
            fastener : fastener,
            sleeveLength : sleeveLength,
            type : type,
            seasons : seasons,
            sex : sex
        })

        if(!candidate)
        {
            const tshirt =  await TShirt.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                size: size,
                collar : collar,
                cut : cut,
                fabricDensity : fabricDensity,
                fastener : fastener,
                sleeveLength : sleeveLength,
                type : type,
                seasons : seasons,
                sex : sex
            });

            res.status(200).json({
                message: 'Tshirt created successfully.'
            })
        }
        else
        {
            res.status(200).json({
                message: 'Tshirt has already been created.'
            })
        }

    }
    catch(err)
    {
        console.log(`[Products Service] Error while creating tshirt:${err}`);
        res.status(500).json({
            message : `Error while creating tshirt:${err}`
        });
    }
}