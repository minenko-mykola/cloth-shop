import {ShirtSchema} from "./ShirtSchema";
import {Products} from "../products";

export const Shirts = Products.discriminator('Shirts',ShirtSchema)