import mongoose from "mongoose";

export const VolunteersSchema = new mongoose.Schema({
    taxNumber: {
        type: String,
        required: [true,"Tax number is required"],
        trim: true,
        unique: [true,"Tax number is unique"],
    },
    organisation : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organisations"
    }
},{
    timestamps: false,
    versionKey : false
})