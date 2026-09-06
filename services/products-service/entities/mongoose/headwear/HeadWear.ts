import {Products} from "../products";
import {HeadWearSchema} from "./HeadWearSchema";

export const HeadWear = Products.discriminator('Headwear',HeadWearSchema)