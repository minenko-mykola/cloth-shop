import {SellerSchema} from "./SellersSchema";
import {Users} from "../users";

export const Sellers = Users.discriminator('Sellers',SellerSchema)