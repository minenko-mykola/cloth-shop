import mongoose from "mongoose";
import {ProductSchema} from "./ProductSchema";

export const Products = mongoose.model("Products", ProductSchema);