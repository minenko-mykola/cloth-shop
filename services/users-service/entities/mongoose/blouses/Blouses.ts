import {BlouseSchema} from "./BlouseSchema";
import {Products} from "../products";

export const Blouses = Products.discriminator('Blouses',BlouseSchema);
