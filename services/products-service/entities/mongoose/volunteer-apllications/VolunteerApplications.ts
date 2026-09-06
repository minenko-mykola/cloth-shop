import mongoose from "mongoose";
import {VolunteerApplicationSchema} from "./VolunteerApplicationsSchema";

export const VolunteerApplications = mongoose.model("VolunteerApplications", VolunteerApplicationSchema)