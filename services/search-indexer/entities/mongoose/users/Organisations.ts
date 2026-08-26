import mongoose from "mongoose";
import {OrganisationsSchema} from "./OrganisationsSchema";

export const Organisations = mongoose.model('Organisations',OrganisationsSchema);