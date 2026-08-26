import mongoose from "mongoose";
import {ProductSchema} from "./ProductSchema";

export const Product = mongoose.model("Product", ProductSchema);