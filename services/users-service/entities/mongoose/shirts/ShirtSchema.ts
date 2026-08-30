import mongoose from "mongoose";

export const ShirtSchema = new mongoose.Schema({
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
                'classic',
                'button-down',
                'spread',
                'wide-spread',
                'cutaway',
                'mandarin',
                'band',
                'polo',
                'camp',
                'cub an',
                'wing'
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
                'buttons',
                'snap-buttons',
                'zipper',
                'none'
            ],
            message : '{VALUE} is not supported'
        }
    },
    sleeveLength : {
        type : String,
        required : true,
        enum : {
            values: [
                'sleeveless',
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
                'dress-shirt',
                'casual-shirt',
                'oxford',
                'flannel',
                'linen',
                'denim',
                'hawaiian',
                'overshirt',
                'tunic'
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