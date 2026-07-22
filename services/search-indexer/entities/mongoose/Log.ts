import mongoose from "mongoose";
import {LogsSchema} from "./LogsSchema";

export const Log = mongoose.model('Log', LogsSchema)