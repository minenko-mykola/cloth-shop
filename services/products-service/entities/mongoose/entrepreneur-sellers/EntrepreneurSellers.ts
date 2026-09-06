import {Sellers} from "../sellers";
import {EntrepreneurSellersSchema} from "./EntrepreneurSellersSchema";

export const EntrepreneurSellers = Sellers.discriminator('EntrepreneurSellers',EntrepreneurSellersSchema)