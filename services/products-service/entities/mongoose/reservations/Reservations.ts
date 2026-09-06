import mongoose from "mongoose";
import {ReservationsSchema} from "./ReservationsSchema";

export const Reservations = mongoose.model("Reservations", ReservationsSchema);