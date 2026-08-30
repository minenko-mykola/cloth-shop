import {checkSchema} from "express-validator";

export const createShirtSchema = checkSchema({
    name : {
        isString : true,
        exists: {
            errorMessage: "Name is required"
        },
        trim: true,
        isLength : {
            options : { min : 8, max : 20 },
            errorMessage : "Name must be between 8 and 20 characters"
        }
    },
    description : {
        isString : true,
        exists: {
            errorMessage: "Description is required"
        },
        trim: true,
        isLength : {
            options : { min : 10, max : 100 },
            errorMessage : "Description must be between 10 and 100 characters"
        }
    },
    price : {
        exists: {
            errorMessage: "Price is required"
        },
        isFloat : {
            options : { min : 0.01 },
            errorMessage : "Price must be a greater than 0"
        }
    },
    quantity : {
        exists: {
            errorMessage: "Quantity is required"
        },
        isInt : {
            options : { min : 1 },
            errorMessage : "Quantity must be a greater than 0"
        }
    },
    size : {
        exists: {
            errorMessage: "Size is required"
        },
        isIn : {
            options : [
                'xs',
                's',
                'm',
                'l',
                'xl',
                'xxl',
                'xxxl'
            ],
            errorMessage : "Invalid size"
        }
    }
})