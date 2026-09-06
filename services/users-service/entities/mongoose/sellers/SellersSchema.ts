import mongoose from "mongoose";

export const SellerSchema = new mongoose.Schema({
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Products"
    }],
    discounts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Discounts"
    }]
},{
    timestamps: false,
    versionKey: false,
    discriminatorKey : 'sellerType'
})