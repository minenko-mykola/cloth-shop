import {Users} from "./Users";
import {VolunteersSchema} from "./VolunteersSchema";

export const Volunteers = Users.discriminator('Volunteers',VolunteersSchema);