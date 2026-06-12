import express from "express";

class Controller {

    async notify(req : express.Request, res : express.Response) : Promise<void>
    {
        try{
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