import {Product} from "../products";
import {GlovesSchema} from "./GlovesSchema";

export const Gloves = Product.discriminator('Gloves',GlovesSchema)