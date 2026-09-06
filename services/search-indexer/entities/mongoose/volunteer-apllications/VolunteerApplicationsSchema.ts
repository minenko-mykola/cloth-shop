import mongoose from "mongoose";

export const VolunteerApplicationSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : [true,"User ID is required"],
    },
    documents : [{
        src : {
            type : String,
            required : [true,"Document src is required"],
        }
    }]
},{
    timestamps : true,
    versionKey : false,
    discriminatorKey : "status"
})