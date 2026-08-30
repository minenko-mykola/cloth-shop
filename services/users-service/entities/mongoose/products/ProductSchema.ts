import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Product name is required"],
        trim: true
    },
    description : {
        type: String,
        required: [true, "Product description is required"],
        trim: true
    },
    price : {
        type: Number,
        required: [true, "Product price is required"],
        min: [1,"Product price must be a positive integer"],
    },
    quantity : {
        type: Number,
        required: [true, "Product quantity is required"],
        min: [0,"Product quantity must be greater or equal to 0"],
    }
},{
    timestamps: false,
    versionKey: false,
    discriminatorKey : 'category'
});