import mongoose from "mongoose";
import {DonationsSchema} from "./DonationsSchema";

export const Donations = mongoose.model("Donations", DonationsSchema);