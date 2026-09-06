import mongoose from "mongoose";
import {PaymentsSchema} from "./PaymentsSchema";

export const Payments = mongoose.model("Payments", PaymentsSchema);