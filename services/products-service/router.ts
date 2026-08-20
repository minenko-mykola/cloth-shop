import express from "express";
import {getProducts, readOutbox, writeOutbox} from "./actions/express";
import {checkSchema} from "express-validator";

export const router = express.Router();

const productSchema = checkSchema({
    id : {
        isUUID : true,
        errorMessage : "Id must be UUID",
        notEmpty : true
    },
    modelId : {
        isUUID : true,
        errorMessage : "Model Id must be UUID",
        notEmpty : true
    },
    size : {
        isString : true,
        errorMessage : "Value must be a string",
        notEmpty : true
    },
    quantity : {
        isNumeric : true,
        errorMessage : "Value must be a number",
        isLength : {
            options : {
                min : 0
            },
            errorMessage : "Value must be greater than 0"
        }
    },
    createdAt : {
        isISO8601 : true,
        notEmpty : true,
        errorMessage : "Invalid createdAt date received"
    },
    updatedAt : {
        isISO8601 : true,
        notEmpty : true,
        errorMessage : "Invalid updatedAt date received"
    }
})

router.get("/",getProducts);
router.post("/write-outbox",productSchema,writeOutbox);
router.get("/read-outbox",readOutbox);