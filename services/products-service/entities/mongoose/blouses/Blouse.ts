import {BlouseSchema} from "./BlouseSchema";
import {Product} from "../products";

export const Blouse = Product.discriminator('Blouse',BlouseSchema);
