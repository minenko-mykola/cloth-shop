import express from "express";
import {esEosRepository} from "../redis/es-eos";
import {validationResult} from "express-validator";

export async function getEsEosLog(req : express.Request, res : express.Response)
{
    const key = String(req.params.key);

    try
    {
        const result = validationResult(req);

        if(!result.isEmpty())
        {
            res.status(400).json({
                message : result.array()
            })
            return;
        }

        const candidate = await esEosRepository.search()
            .where("key").is.equalTo(key).return.first()

        res.status(200).send({
            message : `Successfully got log with key:${candidate}`,
            key : candidate
        })
    }
    catch(err)
    {
        console.log(`Error while getting EsEosLog log request: ${err}`);
        res.status(500).json({
            message : `Error while getting EsEosLog log request: ${err}`
        })
    }
}