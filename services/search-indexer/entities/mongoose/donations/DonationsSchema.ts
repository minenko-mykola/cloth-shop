import mongoose from "mongoose";

export const DonationsSchema = new mongoose.Schema({
    campaign : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FundraisingCampaigns",
        required : [true,"Campaign ID is required"]
    },
    donor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : [true,"User ID is required"]
    },
    payment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Payments",
        required : [true,"Payment ID is required"]
    }
})