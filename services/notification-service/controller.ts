import express from "express";
import {kafkaMessageProducer} from "./messages";
import dotenv from "dotenv";

dotenv.config({ path : "envs/.env.notifications" , override : false })

class Controller {

    async notify(req : express.Request, res : express.Response) : Promise<void>
    {
        try{
            await kafkaMessageProducer.connect()
            await kafkaMessageProducer.send({
                topic : "notifications",
                message : {
                    value : `Angry kitten ate a cat`
                }
            })

            res.json({
                message : "Hello from notification service!"
            })
        }catch (err)
        {
            await Promise.reject(`[Notification Service] Error:${err}`)
            res.status(500).json({
                error : `[Notification Service] Error:${err}`
            })
        }
    }
}

export const actions = new Controller();