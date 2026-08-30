import mongoose from "mongoose";

export const TShirtSchema = new mongoose.Schema({
    size : {
        type : String,
        required : true,
        enum : {
            values: [
                'xs',
                's',
                'm',
                'l',
                'xl',
                'xxl',
                'xxxl'
            ],
            message : '{VALUE} is not supported'
        }
    },
    collar : {
        type : String,
        required : true,
        enum : {
            values: [
                'crew',
                'v-neck',
                'scoop',
                'boat',
                'henley'
            ],
            message : '{VALUE} is not supported'
        }
    },
    cut : {
        type : String,
        required : true,
        enum : {
            values: [
                'slim',
                'regular',
                'relaxed',
                'loose',
                'oversized'
            ],
            message : '{VALUE} is not supported'
        }
    },
    fabricDensity : {
        type : String,
        required : true,
        enum : {
            values: [
                'light',
                'medium',
                'heavy'
            ],
            message : '{VALUE} is not supported'
        }
    },
    fastener : {
        type : String,
        required : true,
        enum : {
            values: [
                'none',
                'buttons',
                'snap-buttons',
                'zipper'
            ],
            message : '{VALUE} is not supported'
        }
    },
    sleeveLength : {
        type : String,
        required : true,
        enum : {
            values: [
                'short',
                'three-quarter',
                'long'
            ],
            message : '{VALUE} is not supported'
        }
    },
    type : {
        type : String,
        required : true,
        enum : {
            values: [
                'basic',
                'polo',
                'henley',
                'graphic',
                'oversized',
                'crop-top',
                'longline',
                'sports',
                'thermal'
            ],
            message : '{VALUE} is not supported'
        }
    },
    seasons : {
        type : [String],
        required : true,
        enum : {
            values: [
                'spring',
                'summer',
                'autumn',
                'winter'
            ],
            message : '{VALUE} is not supported'
        }
    },
    sex : {
        type : String,
        required : true,
        enum : {
            values: [
                'male',
                'female',
                'unisex'
            ],
            message : '{VALUE} is not supported'
        }
    }
},{
    timestamps : false,
    versionKey : false
})