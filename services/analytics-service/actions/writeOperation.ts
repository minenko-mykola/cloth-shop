import express from "express";
import {logsRepository} from "../redis/logs";
import {uuidv7} from "uuidv7";
import {NameType, StatusType} from "../redis/logs/types";
import {body} from "express-validator";

export async function writeOperation(req : express.Request, res : express.Response)
{
    const {name,status} = req.body;
    const operationId = req.body.operationId || uuidv7();

    console.log("Object",{
        operationId:operationId,
        name : name,
        status : status
    })

    try
    {
        if(!Object.values(NameType).includes(name) || !Object.values(StatusType).includes(status))
        {
            res.status(400).json({
                message : "Name or status have incorrect values"
            });
            return;
        }
        else if(!body(operationId).isUUID())
        {
            res.status(400).json({
                message : "ID must be a UUID"
            });
            return;
        }

        const candidate = await logsRepository.search().where("operationId").is.equalTo(operationId)
            .and("name").is.equalTo(name).and("status").is.equalTo(status).return.all();

        if(candidate.length !== 0)
        {
            res.status(400).json({
                message : `Operation status is already ${status}`
            })
            return;
        }

        const object = {
            operationId : operationId,
            name : name,
            status : status,
            createdAt : new Date(),
        }

        await logsRepository.save(object);

        res.status(200).json({
            message : `Operation with ID:${operationId} created successfully`,
            operationId : operationId,
        })
    }
    catch(err)
    {
        console.log(`Error while writing operation:${err}`);
        res.status(500).json({
            message: `Error while writing operation:${err}`
        })
    }
}