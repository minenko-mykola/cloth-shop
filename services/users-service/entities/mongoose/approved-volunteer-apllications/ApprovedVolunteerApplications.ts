import {VolunteerApplications} from "../volunteer-apllications/VolunteerApplications";
import {ApprovedVolunteerApplicationsSchema} from "./ApprovedVolunteerApplicationsSchema";

export const ApprovedVolunteerApplications = VolunteerApplications.discriminator("ApprovedVolunteerApplications",ApprovedVolunteerApplicationsSchema)