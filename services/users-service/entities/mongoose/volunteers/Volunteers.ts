import {Users} from "../users";
import {VolunteersSchema} from "./VolunteersSchema";

export const Volunteers = Users.discriminator('Volunteers',VolunteersSchema);