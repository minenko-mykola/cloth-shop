import {Product} from "../products";
import {HeadWearSchema} from "./HeadWearSchema";

export const HeadWear = Product.discriminator('Headwear',HeadWearSchema)