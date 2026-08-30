import {ShirtSchema} from "./ShirtSchema";
import {Product} from "../products";

export const Shirt = Product.discriminator('Shirt',ShirtSchema)