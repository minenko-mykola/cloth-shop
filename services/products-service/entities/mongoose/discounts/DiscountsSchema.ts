import mongoose from "mongoose";

export const DiscountsSchema = new mongoose.Schema(
    {
        percentage: {
            type: Number,
            min: [10, "Percentage must be at least 10"],
            max: [50, "Percentage must be at most 50"],
            required: [true, "Percentage is required"],
        },

        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products",
                required: [true, "Products ID are required"],
            },
        ],

        auditory : {
            type: String,
            required: [true,"Category is required"],
            enum : {
                values : ["all","volunteer","users"],
                errorMessage : '{VALUE} is not supported'
            }
        },

        seller : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Sellers",
            required: [true, "Sellers ID is required"],
        }
    },
    {
        timestamps: false,
        versionKey : false
    }
);