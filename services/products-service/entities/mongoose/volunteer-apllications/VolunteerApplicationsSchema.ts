import mongoose from "mongoose";

export const VolunteerApplicationSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : [true,"User ID is required"],
    },
    documents: {
        type : [{
            src : {
                type : String,
                required : [true,"SRC is required"],
            }
        }],

    }
},{
    timestamps : true,
    versionKey : false,
    discriminatorKey : "status"
})