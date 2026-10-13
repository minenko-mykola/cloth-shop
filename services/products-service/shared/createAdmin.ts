import {Admins} from "../entities/mongoose/admins";

export async function createAdmin()
{
    try
    {
        const admin = await Admins.create({
            name : "Admin 1",
            surname : "Adminin 1",
            login : "admin.adminin1@gmail.com",
            password : "secure_admin_adminin_password"
        });
    }
    catch (err)
    {
        console.log(`Error creating admin:${err}`);
        throw err
    }
}