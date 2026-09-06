import mongoose from "mongoose";

export const AdminsSchema = new mongoose.Schema({

},{
    timestamps: false,
    versionKey: false
})