import {VolunteerApplications} from "../volunteer-apllications/VolunteerApplications";
import {RejectedVolunteerApplicationsSchema} from "./RejectedVolunteerApplicationsSchema";

export const RejectedVolunteerApplications = VolunteerApplications.discriminator("RejectedVolunteerApplications",RejectedVolunteerApplicationsSchema)