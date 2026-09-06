import mongoose from "mongoose";

export const OrganisationSellersSchema = new mongoose.Schema({
    edrpou : {
        type: String,
        required: [true,"Edrpou is required"],
        trim: true,
        min_length: [8,"Min edrpou length is 8 characters"],
        max_length: [8,"Max edrpou length is 8 characters"],
        unique : [true,"Edrpou must be unique"],
    }
},{
    timestamps : false,
    versionKey : false
})