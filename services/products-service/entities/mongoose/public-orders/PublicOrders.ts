import {Orders} from "../orders/Orders";
import {PublicOrdersSchema} from "./PublicOrdersSchema";

export const PublicOrders = Orders.discriminator("PublicOrders",PublicOrdersSchema)