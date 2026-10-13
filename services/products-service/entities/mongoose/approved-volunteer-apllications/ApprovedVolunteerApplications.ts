import {VolunteerApplications} from "../volunteer-apllications";
import {ApprovedVolunteerApplicationsSchema} from "./ApprovedVolunteerApplicationsSchema";

export const ApprovedVolunteerApplications = VolunteerApplications.discriminator("ApprovedVolunteerApplications",ApprovedVolunteerApplicationsSchema)