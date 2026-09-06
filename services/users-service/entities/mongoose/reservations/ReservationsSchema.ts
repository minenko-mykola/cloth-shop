import mongoose from "mongoose";

export const ReservationsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required"],
        ref: "Volunteers"
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Product ID is required"],
        ref: "Products"
    },

    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"]
    },

    expiresAt: {
        type: Date,
        required: [true, "Expiration date is required"]
    }
}, {
    timestamps: true,
    versionKey: false
});

ReservationsSchema.index(
    { expiresAt: 1 },
    { expireAfterSeconds: 0 }
);