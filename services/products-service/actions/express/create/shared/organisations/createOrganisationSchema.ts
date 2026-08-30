import {checkSchema} from "express-validator";
import {ObjectId} from "bson";

export const createOrganisationSchema = checkSchema({
    name : {
        exists : {
            errorMessage : "Name is required",
        },
        isLength : {
            options : {
                min : 8,
                max : 20
            },
            errorMessage : "Name must be between 8 and 20 characters"
        },
        trim : true,
        isString : {
            errorMessage : "Name must be a string"
        }
    },
    head : {
        exists : {
            errorMessage : "Name is required",
        },
        isMongoId : {
            errorMessage : "Head ID must be a MongoID",
        }
    },
    volunteers : {
        custom : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                return values.every(value => ObjectId.isValid(value));
            }
        }
    }
})