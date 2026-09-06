import mongoose from "mongoose";
import {PaymentTransactionsSchema} from "./PaymentTransactionsSchema";

export const PaymentTransactions = mongoose.model("PaymentTransactions", PaymentTransactionsSchema);