import mongoose from "mongoose";

export const DirectOrdersSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: [true,"User ID is required"],
        ref : 'Users'
    },
    payment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Payments',
        default : null
    }
},{
    timestamps: true,
    versionKey: false
})
