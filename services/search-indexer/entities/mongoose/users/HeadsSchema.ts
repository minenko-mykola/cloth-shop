import mongoose from "mongoose";

export const HeadsSchema = new mongoose.Schema({
    taxNumber : {
        type : String,
        unique : [true,"Tax number must be unique"],
        length : 10,
        trim: true
    },
    organisation : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organisations"
    }
},{
    timestamps: false,
    versionKey: false
})