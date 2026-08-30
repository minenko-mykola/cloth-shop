import mongoose from "mongoose";

export const GlovesSchema = new mongoose.Schema({
    size : {
        type : String,
        enum : {
            values: [
                'xs',
                's',
                'm',
                'l',
                'xl',
                'xxl'
            ],
            message : '{VALUE} is not supported'
        }
    },
    waterProtection : {
        type : Boolean,
        default : false
    },
    windProtection : {
        type : Boolean,
        default : false
    }
},{
    timestamps : false,
    versionKey : false
})