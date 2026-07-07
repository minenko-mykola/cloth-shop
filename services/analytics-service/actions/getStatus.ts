import express from "express";
import {logsRepository} from "../redis/logs";
import {validationResult} from "express-validator";

export async function getStatus(req: express.Request, res: express.Response)
{
    const {operationId} = req.params;

    const result = validationResult(req)

    if(!result.isEmpty())
    {
        res.status(400).json({
            message : result.array()
        })
        return;
    }

    try
    {
        const result = await logsRepository.search().where("operationId").is.equalTo(String(operationId))
            .sortDesc("createdAt").return.first();

        res.status(200).json({
            message : result
        });
    }
    catch(err)
    {
        console.log(`Error while searching(Redis):${err}`)
        res.status(500).json({
            message : `Error while searching(Redis):${err}`
        })
    }
}