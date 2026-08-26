import {TShirtSchema} from "./TShirtSchema";
import {Product} from "../products";

export const TShirt = Product.discriminator('TShirt',TShirtSchema)