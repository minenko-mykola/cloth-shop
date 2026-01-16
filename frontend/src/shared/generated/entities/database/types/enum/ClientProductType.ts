import {ProductSubCategoriesType} from "./index.ts";
import {ProductInfo} from "../../additional";

export type ClientProductType = {
    product_info : ProductInfo;
    category_info : ProductSubCategoriesType;
};