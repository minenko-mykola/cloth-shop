import mongoose from "mongoose";

export const ApprovedVolunteerApplicationsSchema = new mongoose.Schema({

},{
    timestamps : true,
    versionKey : false
})