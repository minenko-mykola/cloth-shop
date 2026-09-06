import mongoose from "mongoose";

export const RejectedVolunteerApplicationsSchema = new mongoose.Schema({
   rejectionReason : {

   }
},{
    timestamps : true,
    versionKey : false
})