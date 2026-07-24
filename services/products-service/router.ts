import express from "express";
import {getProducts, updateProduct} from "./actions/express";
import {checkSchema} from "express-validator";

export const router = express.Router();

const updateSchema = checkSchema({
    id : {
        isUUID : true,
        errorMessage : "Id must be UUID",
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
    }
})

router.get("/",getProducts);
router.post("/update",updateSchema,updateProduct);