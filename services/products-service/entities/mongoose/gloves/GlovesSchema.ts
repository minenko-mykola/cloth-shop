import mongoose from "mongoose";

export const GlovesSchema = new mongoose.Schema({
    size : {
        type : String,
        enum : {
            values : [],
            message : ''
        }
    },
    waterProtection : {
        type : Boolean,
        required : [true,"Water protection is required"],
        default : false
    },
    windProtection : {
        type : Boolean,
        required : [true,"Wind protection is required"],
        default : false
    }
},{
    timestamps : false,
    versionKey : false
})