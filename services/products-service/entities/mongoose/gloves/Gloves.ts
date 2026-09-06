import {Products} from "../products";
import {GlovesSchema} from "./GlovesSchema";

export const Gloves = Products.discriminator('Gloves',GlovesSchema)