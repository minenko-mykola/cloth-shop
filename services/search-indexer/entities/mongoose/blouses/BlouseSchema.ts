import mongoose from "mongoose";

export const BlouseSchema = new mongoose.Schema({
    size : {
        type : String,
        required : true,
        enum : {
            values : [
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
    back : {
        type : [String],
        required : true,
        enum : {
            values: [
                'straight',
                'fitted',
                'loose',
                'open-back',
                'cross-back',
                'button-back'
            ],
            message : '{VALUE} is not supported'
        }
    },
    collar : {
        type : String,
        required : true,
        enum : {
            values: [
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
            ],
            message : '{VALUE} is not supported'
        }
    },
    style : {
        type : [String],
        required : true,
        enum : {
            values: [
                'casual',
                'classic',
                'business',
                'romantic',
                'boho',
                'vintage',
                'sporty',
                'oversized',
                'elegant'
            ],
            message : '{VALUE} is not supported'
        }
    },
    fasteners : {
        type : [String],
        required : true,
        enum : {
            values: [
                'buttons',
                'zipper',
                'snaps',
                'hooks',
                'tie',
                'lace-up',
                'none'
            ],
            message : '{VALUE} is not supported'
        }
    },
    length : {
        type : String,
        required : true,
        enum : {
            values: [
                'cropped',
                'waist',
                'hip',
                'mid-hip',
                'long',
                'tunic'
            ],
            message : '{VALUE} is not supported'
        }
    },
    sleeve : {
        type : String,
        required : true,
        enum : {
            values: [
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
            ],
            message : '{VALUE} is not supported'
        }
    },
    season : {
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
    }
},{
    timestamps : false,
    versionKey : false
})