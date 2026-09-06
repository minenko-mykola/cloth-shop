import mongoose from "mongoose";

export const OrganisationsSchema = new mongoose.Schema({
    edrpou : {
        required: [true, "EDRPOU is required"],
        unique: [true, "EDRPOU must be unique"],
        trim: true,
        match: [/^\d{8}$/, "EDRPOU must contain exactly 8 digits"] //???
    },
    name : {
        type: String,
        required: [true, "Organisation name is required"],
        trim: true,
        unique: [true,"Organisation name must be unique"],
    },
    head : {
        type : mongoose.Schema.Types.ObjectId,
        required: [true, "Head ID is required"],
        unique: [true, "Head ID must be unique"],
        ref : "Heads",
    }
},{
    timestamps : false,
    versionKey : false
})