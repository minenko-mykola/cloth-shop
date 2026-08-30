import {checkSchema} from "express-validator";

export const createHeadWearSchema = checkSchema({
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
    headCircumference : {
        exists: {
            errorMessage: "Head circumference is required"
        },
        isInt : {
            options : { min : 50, max : 64 },
            errorMessage : "Head circumference must be between 50 and 64."
        }
    },
    type : {
        exists: {
            errorMessage: "Type is required"
        },
        isIn : {
            options : [[
                'cap',
                'baseball-cap',
                'beanie',
                'hat',
                'fedora',
                'panama',
                'bucket-hat',
                'beret',
                'visor',
                'headband',
                'earmuffs',
                'balaclava',
                'ushanka',
                'cowboy-hat',
                'sun-hat'
            ]],
            errorMessage : "Invalid type"
        }
    },
    seasons : {
        exists: {
            errorMessage: "Season is required"
        },
        custom : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value]

                const allowed = [
                    'spring',
                    'summer',
                    'autumn',
                    'winter'
                ]

                return values.every(value => allowed.includes(value))
            },
            errorMessage : "Invalid season"
        },
        customSanitizer : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                return [...new Set(values)];
            }
        }
    },
    sex : {
        exists: {
            errorMessage : "Sex is required"
        },
        isIn : {
            options : [
                [
                'male',
                'female',
                'unisex'
                ]
            ],
            errorMessage : "Invalid sex"
        }
    },
    visor : {
        exists: {
            errorMessage: "Visor is required"
        },
        isIn : {
            options : [[
                'none',
                'short',
                'standard',
                'long',
                'curved',
                'flat'
            ]],
            errorMessage : "Invalid visor"
        }
    },
    earsClosed : {
        isBoolean : true,
        errorMessage : "earsClosed must be a boolean value"
    },
    sizeAdjuster : {
        isBoolean : true,
        errorMessage : "sizeAdjuster must be a boolean value"
    },
    ventilationHoles : {
        isBoolean : true,
        errorMessage : "ventilationHoles must be a boolean value"
    }
})