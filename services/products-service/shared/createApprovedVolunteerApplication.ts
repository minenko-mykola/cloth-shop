import {ApprovedVolunteerApplications} from "../entities/mongoose/approved-volunteer-apllications";

export async function createApprovedVolunteerApplication()
{
    try
    {
        const approvedApplication = await ApprovedVolunteerApplications.create({
            user : "6a9d26522d7ff66271b4a885",
            documents : [{
                src : "documents/kitten1.png"
            },
            {
                    src : "documents/kitten2.png"
            }]
        })
    }
    catch(err)
    {
        console.log(`Error creating approved volunteer application:${err}`);
        throw err
    }
}