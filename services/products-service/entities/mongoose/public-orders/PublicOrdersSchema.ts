import mongoose from "mongoose";

export const PublicOrdersSchema = new mongoose.Schema({
    campaign : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FundraisingCampaigns",
        required : [true,"Campaign ID is required"]
    }
})