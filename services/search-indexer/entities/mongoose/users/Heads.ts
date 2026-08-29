import {Users} from "./Users";
import {HeadsSchema} from "./HeadsSchema";

export const Heads = Users.discriminator('Heads',HeadsSchema)