import {Sellers} from "../sellers";
import {IndividualSellerSchema} from "./IndividualSellersSchema";

export const IndividualSellers = Sellers.discriminator('IndividualSellers',IndividualSellerSchema)