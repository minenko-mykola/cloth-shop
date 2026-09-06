import {Users} from "../users";
import {AdminsSchema} from "./AdminsSchema";

export const Admins = Users.discriminator('Admins',AdminsSchema)