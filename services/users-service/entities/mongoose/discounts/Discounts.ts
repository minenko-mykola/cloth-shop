import mongoose from "mongoose";
import {DiscountsSchema} from "./DiscountsSchema";

export const Discounts = mongoose.model("Discounts", DiscountsSchema);