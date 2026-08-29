import mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"User name is required"],
        trim: true
    },
    surname: {
        type: String,
        required: [true,"User surname is required"],
        trim: true
    },
    login : {
        type: String,
        required: [true,"User login is required"],
        trim: true,
        unique: [true, "Login must be unique"],
    },
    password : {
        type: String,
        required: [true,"User password is required"],
        trim: true,
        hash : true
    }
},{
    timestamps : false,
    versionKey : false
})