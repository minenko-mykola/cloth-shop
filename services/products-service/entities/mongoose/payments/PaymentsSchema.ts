import mongoose from "mongoose";

export const PaymentsSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, "Amount is required"],
            min: [0.01, "Amount must be greater than 0"],
        },

        currency: {
            type: String,
            required: [true, "Currency is required"],
            enum: {
                values: ["UAH", "USD", "EUR"],
                message: "Invalid currency: {VALUE}",
            },
            uppercase: true,
        },

        status: {
            type: String,
            required: [true, "Status is required"],
            enum: {
                values: [
                    "pending",
                    "paid",
                    "failed",
                    "refunded",
                    "cancelled",
                ],
                message: "Invalid payment status: {VALUE}",
            },
            default: "pending",
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
