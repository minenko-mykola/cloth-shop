import mongoose from "mongoose";
import {UsersSchema} from "./UsersSchema";

export const Users = mongoose.model("Users", UsersSchema)