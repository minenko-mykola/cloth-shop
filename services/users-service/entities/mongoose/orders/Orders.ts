import mongoose from "mongoose";
import {OrdersSchema} from "./OrdersSchema";

export const Orders = mongoose.model('Orders', OrdersSchema);