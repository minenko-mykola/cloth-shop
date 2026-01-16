import express from "express";
import axios from "axios";

export const espoCrmRouter = express.Router();

espoCrmRouter.post('/login', async (req, res) => {
    axios.get("http://espocrm/api/v1/Account",{
        headers: {
            "X-Api-Key:" : "b00b73d8f22979096db0543a57c5eaee"
        }
    }).then((result) => {
        console.log("login result", result);
    }).catch((err) => {
        console.log(`Error from espoCRM:${err}`);
    })
})