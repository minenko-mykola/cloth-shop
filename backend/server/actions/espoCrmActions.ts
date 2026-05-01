import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "config/envs/.env.espocrm",override : false });

class EspoCrmActions
{
    async login(req: express.Request, res: express.Response)
    {
        axios.get("http://espocrm/api/v1/Account",{
            headers: {
                "X-Api-Key:" : process.env.X_API_KEY
            }
        }).then((result) => {
            console.log("login result", result);
        }).catch((err) => {
            console.log(`Error from espoCRM:${err}`);
        })
    }
}

export const espoCrmActions = new EspoCrmActions();