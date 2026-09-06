import {TShirtSchema} from "./TShirtSchema";
import {Products} from "../products";

export const TShirts = Products.discriminator('TShirts',TShirtSchema)