import {checkSchema} from "express-validator";

export const createVolunteerSchema = checkSchema({
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
    surname : {
        exists : {
            errorMessage : "Surname is required",
        },
        isLength : {
            options : {
                min : 8,
                max : 20
            },
            errorMessage : "Surname must be between 8 and 20 characters"
        },
        trim : true,
        isString : {
            errorMessage : "Surname must be a string"
        }
    },
    login : {
        exists : {
            errorMessage : "Login is required",
        },
        isEmail : {
            errorMessage : "Login must be an email"
        },
        trim : true
    },
    password: {
        exists : {
            errorMessage : "Password is required"
        },
        isStrongPassword : {
            errorMessage : "Password must be a strong",
            options : {
                minUppercase : 0,
                minNumbers : 0,
                minLength : 8
            }
        }
    },
    taxNumber : {
        exists : {
            errorMessage : "Tax number is required"
        },
        isLength : {
            options : {
                min : 10,
                max : 10
            },
            errorMessage : "Tax number must be 10 characters"
        }
    },
    organisation : {
        isMongoId : {
            errorMessage : "Organisation ID must be a MongoID"
        }
    }
})