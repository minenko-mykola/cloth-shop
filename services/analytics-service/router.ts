import express from "express";
import {createEsEosLog, getEsEosLog, getStatus, writeOperation} from "./actions";
import {checkSchema} from "express-validator";
import {createSession} from "./actions";

export const router = express.Router();

const getStatusUUID = checkSchema({
    operationId : {
        isUUID : true,
        errorMessage : "Operation ID must be a UUID",
        notEmpty : true
    }
})

const createSessionSchema = checkSchema({
    userId : {
        isUUID : true,
        errorMessage : "User ID must be a UUID"
    },
    refreshToken : {
        isJWT : true,
        errorMessage : "Refresh token must be a JWT"
    },
    accessToken : {
        isJWT : true,
        errorMessage : "Access token must be a JWT"
    }
})

const createEsEosLogSchema = checkSchema({
    key : {
        isUUID : true,
        errorMessage : "Key must be a UID"
    }
})

router.get("/get-status/:operationId",getStatusUUID,getStatus);
router.post('/write-operation',writeOperation);
router.post("/create-session",createSessionSchema,createSession);
router.post("/create-es-eos-log",createEsEosLogSchema,createEsEosLog)
router.get("/get-es-eos-log/:key",createEsEosLogSchema,getEsEosLog)