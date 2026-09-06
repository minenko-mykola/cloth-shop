import mongoose from "mongoose";

export const VolunteersSchema = new mongoose.Schema({
    organisation : { //embed??
        type : mongoose.Schema.Types.ObjectId,
        required: [true,"Organisation ID is required"],
        ref : "Organisations"
    },
    campaigns: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "FundraisingCampaigns"
    }]
},{
    timestamps: false,
    versionKey : false
})