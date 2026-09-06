import {Users} from "../users/Users";
import {HeadsSchema} from "./HeadsSchema";

export const Heads = Users.discriminator('Heads',HeadsSchema)