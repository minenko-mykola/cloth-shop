import mongoose from "mongoose";

export const OrdersSchema = new mongoose.Schema(
    {
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: [true, "Product is required"],
                },

                unitPrice: {
                    type: Number,
                    required: [true, "Product unit price is required"],
                    min: [0.01, "Product unit price must be greater than 0"],
                },

                quantity: {
                    type: Number,
                    required: [true, "Product quantity is required"],
                    min: [1, "Product quantity must be greater than 0"],
                    validate: {
                        validator: Number.isInteger,
                        message: "Product quantity must be an integer",
                    },
                },

                finalPrice: {
                    type: Number,
                    required: [true, "Product final price is required"],
                    min: [0.01, "Product final price must be greater than 0"],
                },
            },
        ],

        status: {
            type: String,
            required: [true, "Order status is required"],
            enum: {
                values: [
                    "pending",
                    "confirmed",
                    "processing",
                    "shipped",
                    "delivered",
                    "cancelled",
                    "completed",
                ],
                message: "Invalid order status: {VALUE}",
            },
            default: "pending",
        },

        commissionPercent: {
            type: Number,
            required: [true, "Commission percent is required"],
            min: [0, "Commission percent cannot be negative"],
            max: [100, "Commission percent cannot exceed 100"],
        },

        totalAmount: {
            type: Number,
            required: [true, "Total amount is required"],
            min: [0.01, "Total amount must be greater than 0"],
        },

        shippingData: {
            firstName: {
                type: String,
                required: [true, "First name is required"],
                trim: true,
            },

            lastName: {
                type: String,
                required: [true, "Last name is required"],
                trim: true,
            },

            phone: {
                type: String,
                required: [true, "Phone is required"],
                trim: true
            },

            city: {
                type: String,
                required: [true, "City is required"],
                trim: true,
            },

            address: {
                type: String,
                required: [true, "Address is required"],
                trim: true,
            },

            postalCode: {
                type: String,
                trim: true,
                required: [true, "Postal code is required"],
            }
        },
    },
    {
        timestamps: true,
        versionKey: false,
        discriminatorKey: "fundingType",
    }
);
