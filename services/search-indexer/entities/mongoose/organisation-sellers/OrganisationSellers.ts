import {Sellers} from "../sellers";
import {OrganisationSellersSchema} from "./OrganisationSellersSchema";

export const OrganisationSellers = Sellers.discriminator('OrganisationSellers',OrganisationSellersSchema)