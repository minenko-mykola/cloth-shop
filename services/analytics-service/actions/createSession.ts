import express from "express";
import {sessionRepository} from "../redis/sessions";
import {validationResult} from "express-validator";

export async function createSession(req: express.Request, res: express.Response)
{
    const result = validationResult(req)

    const {userId,refreshToken,accessToken} = req.body;

    try
    {
        if(!result.isEmpty())
        {
            res.status(400).json({
                message : result.array()
            })
            return;
        }

        let candidate = await sessionRepository.search().where("userId")
            .is.equalTo(userId).and("refreshToken")
            .is.equalTo(refreshToken)
            .and("accessToken").is.equalTo(accessToken).return.first();

        if(candidate)
        {
            const jsonCandidate = JSON.stringify(candidate);

            //duplicate found,returning it
            res.status(200).json({
                message : `Session already exists`,
                session : jsonCandidate
            })
        }
        else
        {
            const object = {
                userId : userId,
                refreshToken : refreshToken,
                accessToken : accessToken
            }

            let session = JSON.stringify(await sessionRepository.save(object));

            res.status(200).json({
                message : `Session created successfully`,
                session : session
            })
        }
    }
    catch(err)
    {
        console.log(`Error while creating session:${err}`);

        res.status(500).json({
            message: `Error while creating session:${err}`
        })
    }
}