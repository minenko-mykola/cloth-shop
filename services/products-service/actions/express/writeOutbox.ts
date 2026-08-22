import express from "express";
import {validationResult} from "express-validator";
import {ProductsOutbox, ProductVariations} from "../../entities/sequelize";
import {sequelize} from "../../connectors";
import {Transaction} from "sequelize";
import ISOLATION_LEVELS = Transaction.ISOLATION_LEVELS;
import {uuidv7} from "uuidv7";

export async function writeOutbox(req : express.Request, res: express.Response)
{
    const result = validationResult(req);

    if(!result.isEmpty())
    {
        res.status(400).json({
            message : result.array()
        });
        return;
    }

    try
    {
        const {variationId,modelId,size,price,quantity} = req.body;

        const result = await sequelize.transaction({
            isolationLevel : ISOLATION_LEVELS.READ_COMMITTED
        },async t => {

            const variation = await ProductVariations.findByPk(variationId, {
                transaction: t,
                lock: t.LOCK.UPDATE
            });

            if (!variation) {
                throw new Error(`Product with id ${variationId} not found.`);
            }

            const changed =
                variation.modelId !== modelId ||
                variation.size !== size ||
                Number(variation.price) !== Number(price) ||
                variation.quantity !== Number(quantity);


            if (changed)
            {
                const newVariation = await variation.update({
                    modelId : modelId,
                    size : size,
                    price : price,
                    quantity : quantity
                },{
                    transaction : t
                })

                const outbox = await ProductsOutbox.create({
                    id : uuidv7(),
                    variationId : variationId,
                    modelId : modelId,
                    size : size,
                    price : price,
                    quantity : quantity
                },{
                    transaction : t
                })
            }
        })

        console.log("[Products Service] Successfully written to outbox:")

        res.status(200).json({
            message : "Message was successfully written to outbox"
        })
    }
    catch(err)
    {
        console.log(`[Products Service] : Error while writing to outbox:${err}`)
        res.status(500).json({
            message : `Error while writing to outbox:${err}`
        });
    }
}