import express from "express";
import {esEosRepository} from "../redis/es-eos";
import {validationResult} from "express-validator";

export async function createEsEosLog(req : express.Request, res : express.Response)
{
    const {key} = req.body;

    try
    {
        const result = validationResult(req);

        console.log("Creating EsEosLog started:",key)

        if(!result.isEmpty())
        {
            res.status(400).json({
                message : result.array()
            })
            return;
        }

        const candidate = await esEosRepository.search()
            .where("key").is.equalTo(key).return.first()

        if(!candidate)
        {
            const newLog = {
                key : key
            }
            const result = await esEosRepository.save(newLog)

            res.status(200).send({
                message : `Successfully created log with id:${result}`,
                log : result
            })
        }
        else
        {
            res.status(200).send({
                message : `Successfully created log with id:${candidate}`,
                log : candidate
            })
        }
    }
    catch(err)
    {
        console.log(`Error while creating EsEosLog log request: ${err}`);
        res.status(500).json({
            message : `Error while creating EsEosLog log request: ${err}`
        })
    }
}