import mongoose from "mongoose";

export const EntrepreneurSellersSchema = new mongoose.Schema({
    taxNumber : {
        type: String,
        required: [true,"Tax Number is required"],
        min_length : [10,"Min tax number length is 10 characters"],
        max_length : [10,"Max tax number length is 10 characters"],
        trim: true
    }
},{
    timestamps : false,
    versionKey : false
})