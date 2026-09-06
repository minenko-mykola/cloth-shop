import mongoose from "mongoose";
import {FundraisingCampaignsSchema} from "./FundraisingCampaignsSchema";

export const FundraisingCampaigns = mongoose.model("FundraisingCampaigns", FundraisingCampaignsSchema);