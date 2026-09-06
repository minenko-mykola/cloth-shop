import mongoose from "mongoose";

export const PaymentTransactionsSchema = new mongoose.Schema(
    {
        payment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payments",
            required: [true, "Payment ID is required"],
        },

        provider: {
            type: String,
            required: [true, "Provider is required"],
            trim: true,
        },

        status: {
            type: String,
            required: [true, "Status is required"],
            enum: {
                values: [
                    "pending",
                    "processing",
                    "succeeded",
                    "failed",
                    "cancelled",
                    "refunded",
                ],
                message: "Invalid payment transaction status: {VALUE}",
            },
        },

        error: {
            type: String,
            trim: true,
            default: null,
        },
    },
    {
        timestamps: true,
        versionKey : false
    }
);