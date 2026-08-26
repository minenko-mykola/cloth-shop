import express from "express";
import {getProducts, writeOutbox} from "./actions/express";
import {checkSchema} from "express-validator";

export const router = express.Router();

const productSchema = checkSchema({
    variationId : {
        isUUID : true,
        errorMessage : "VariationId must be UUID",
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
    price : {
        isNumeric : true,
        errorMessage : "Value must be a number",
        isLength : {
            options : {
                min : 0
            },
            errorMessage : "Value must be greater than 0"
        }
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
    }
})

router.get("/",getProducts);
router.post("/write-outbox",productSchema,writeOutbox);
