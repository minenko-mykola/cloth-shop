import {Orders} from "../orders/Orders";
import {DirectOrdersSchema} from "./DirectOrdersSchema";

export const DirectOrders = Orders.discriminator("DirectOrders",DirectOrdersSchema)