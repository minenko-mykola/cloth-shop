import mongoose from "mongoose";

export const OrganisationsSchema = new mongoose.Schema({
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
    },
    volunteers : [{
        type : mongoose.Schema.Types.ObjectId,
        required: [true, "Volunteer Id is required"],
        ref : "Volunteers"
    }]
},{
    timestamps : false,
    versionKey : false
})