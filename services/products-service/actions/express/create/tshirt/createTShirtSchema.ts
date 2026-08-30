import {checkSchema} from "express-validator";

export const createTShirtSchema = checkSchema({
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
            options : [[
                'xs',
                's',
                'm',
                'l',
                'xl',
                'xxl',
                'xxxl'
            ]],
            errorMessage : "Invalid size"
        }
    },
    collar : {
        exists: {
            errorMessage: "Collar is required"
        },
        isIn: {
            options : [[
                'crew',
                'v-neck',
                'scoop',
                'boat',
                'henley'
            ]],
            errorMessage : "Invalid collar"
        }
    },
    cut : {
        exists: {
            errorMessage: "Cut is required"
        },
        isIn: {
            options : [[
                'slim',
                'regular',
                'relaxed',
                'loose',
                'oversized'
            ]],
            errorMessage : "Invalid cut"
        }
    },
    fabricDensity : {
        exists: {
            errorMessage: "Fabric density is required"
        },
        isIn: {
            options : [[
                'light',
                'medium',
                'heavy'
            ]],
            errorMessage : "Invalid fabric density"
        }
    },
    fastener : {
        exists: {
            errorMessage: "Fastener is required"
        },
        isIn: {
            options :[ [
                'buttons',
                'snap-buttons',
                'zipper',
                'none'
            ]],
            errorMessage : "Invalid fastener"
        }
    },
    sleeveLength : {
        exists: {
            errorMessage: "Sleeve length is required"
        },
        isIn: {
            options : [[
                'short',
                'three-quarter',
                'long'
            ]],
            errorMessage : "Invalid sleeve length"
        }
    },
    type : {
        exists: {
            errorMessage: "Type is required"
        },
        isIn: {
            options : [[
                'basic',
                'polo',
                'henley',
                'graphic',
                'oversized',
                'crop-top',
                'longline',
                'sports',
                'thermal'
            ]],
            errorMessage : "Type is required"
        }
    },
    seasons : {
        exists: {
            errorMessage: "Season is required"
        },
        custom : {
            options : (value) => {

                const values = Array.isArray(value) ? value : [value];

                const allowed = [
                    'spring',
                    'summer',
                    'autumn',
                    'winter'
                ]

                return values.every((value) => allowed.includes(value))
            },
            errorMessage : "Invalid season value"
        },
        customSanitizer : {
            options : (value) => {
                return [...new Set(value)]
            }
        }
    },
    sex : {
        exists: {
            errorMessage : "Sex is required"
        },
        isIn: {
            options : [
                [
                    'male',
                    'female',
                    'unisex'
                ]
            ],
            errorMessage : "Invalid sex"
        }
    }
})