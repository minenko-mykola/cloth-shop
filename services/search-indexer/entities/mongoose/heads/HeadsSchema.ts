import mongoose from "mongoose";

export const HeadsSchema = new mongoose.Schema({
    organisation : { //embed???
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organisations"
    }
},{
    timestamps: false,
    versionKey: false
})