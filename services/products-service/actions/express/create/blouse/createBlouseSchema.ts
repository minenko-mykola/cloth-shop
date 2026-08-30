import {checkSchema} from "express-validator";

export const createBlouseSchema = checkSchema({
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
    back : {
        exists: {
            errorMessage: "Back is required"
        },
        custom : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                const allowed = [
                    'straight',
                    'fitted',
                    'loose',
                    'open-back',
                    'cross-back',
                    'button-back'
                ];

                return values.every(value => allowed.includes(value));
            },
            errorMessage : "Invalid back"
        },
        customSanitizer : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                return [...new Set(values)];
            }
        }
    },
    collar : {
        exists: {
            errorMessage: "Collar is required"
        },
        isIn : {
            options : [[
                'round',
                'v-neck',
                'square',
                'boat',
                'shirt',
                'peter-pan',
                'mandarin',
                'stand',
                'turtleneck',
                'halter',
                'off-shoulder'
            ]],
            errorMessage : "Invalid collar"
        }
    },
    style : {
        exists: {
            errorMessage: "Style is required"
        },
        custom : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                const allowed = [
                    'casual',
                    'classic',
                    'business',
                    'romantic',
                    'boho',
                    'vintage',
                    'sporty',
                    'oversized',
                    'elegant'
                ];

                return values.every(value => allowed.includes(value));
            },
            errorMessage : "Invalid style"
        },
        customSanitizer : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                return [...new Set(values)];
            }
        }
    },
    fasteners : {
        exists: {
            errorMessage: "Fasteners is required"
        },
        custom : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                const allowed = [
                    'buttons',
                    'zipper',
                    'snaps',
                    'hooks',
                    'tie',
                    'lace-up',
                    'none'
                ];

                return values.every(value => allowed.includes(value));
            },
            errorMessage : "Invalid fasteners"
        },
        customSanitizer : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                return [...new Set(values)];
            }
        }
    },
    length : {
        exists: {
            errorMessage: "Length is required"
        },
        isIn : {
            options: [[
                'cropped',
                'waist',
                'hip',
                'mid-hip',
                'long',
                'tunic'
            ]],
            errorMessage : 'Invalid length'
        }
    },
    sleeve : {
        exists: {
            errorMessage: "Sleeve is required"
        },
        isIn : {
            options: [[
                'sleeveless',
                'cap',
                'short',
                'elbow',
                'three-quarter',
                'long',
                'bell',
                'puff',
                'batwing',
                'raglan'
            ]],
            errorMessage : 'Invalid sleeve'
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
                ];

                return values.every(value => allowed.includes(value));
            },
            errorMessage : 'Invalid season'
        },
        customSanitizer : {
            options : (value) => {
                const values = Array.isArray(value) ? value : [value];

                return [...new Set(values)];
            }
        }
    }
})