import express from "express";

class Controller {

    async getAllProducts(req : express.Request, res : express.Response) : Promise<void>
    {
        try {
            res.status(200).json({
                message : "Got products"
            })
        }
        catch (err)
        {
            res.status(500).json({
                message : `Got error:${err}`
            })
        }
    }
}

export const actions = new Controller();