import mongoose from "mongoose";

export const HeadWearSchema = new mongoose.Schema({
    headCircumference : {
        type : Number,
        required : true,
        min : [50,"Head circumference cannot be less than 50"],
        max : [64,"Head circumference cannot be greater than 64"],
    },
    type : {
        type : String,
        required : true,
        enum : {
            values: [
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
    },
    visor : {
        type : String,
        required : true,
        enum : {
            values: [
                'none',
                'short',
                'standard',
                'long',
                'curved',
                'flat'
            ],
            message : '{VALUE} is not supported'
        }
    },
    earsClosed : {
        type : Boolean,
        default: false
    },
    sizeAdjuster : {
        type : Boolean,
        default: false
    },
    ventilationHoles : {
        type : Boolean,
        default: false
    }
},{
    timestamps : false,
    versionKey : false
})