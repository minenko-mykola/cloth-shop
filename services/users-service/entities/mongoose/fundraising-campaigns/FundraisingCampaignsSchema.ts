import mongoose from "mongoose";

export const FundraisingCampaignsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Campaign name is required"],
            trim: true,
            minlength: [3, "Campaign name must be at least 3 characters long"],
            maxlength: [100, "Campaign name must not exceed 100 characters"],
        },

        description: {
            type: String,
            required: [true, "Campaign description is required"],
            trim: true,
            minlength: [10, "Campaign description must be at least 10 characters long"],
        },

        targetAmount: {
            type: Number,
            required: [true, "Target amount is required"],
            min: [1, "Target amount must be greater than 0"],
        },

        collectedAmount: {
            type: Number,
            default: 0,
            min: [0, "Collected amount cannot be negative"],
        },

        status: {
            type: String,
            enum: {
                values: ["pending", "active", "completed", "cancelled"],
                message: "Invalid campaign status",
            },
            default: "pending",
        },

        startDate: {
            type: Date,
            required: [true, "Start date is required"],
            default: Date.now,
        },

        endDate: {
            type: Date,
            required: [true, "End date is required"],
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Volunteers",
            required: [true, "Campaign author is required"],
        },
        donations : [{
            type : mongoose.Schema.Types.ObjectId,
            ref: "Donations"
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);