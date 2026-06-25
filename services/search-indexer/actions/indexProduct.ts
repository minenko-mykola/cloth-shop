import express from "express";

export async function indexProduct(req : express.Request, res : express.Response)
{
    res.status(200).json({
        message : "Indexed product successfully"
    })
}