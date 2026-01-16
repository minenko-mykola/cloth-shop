import {GlovesInfo, HeadWearsInfo} from "../../models/categories/accessories";
import {MenShirtsInfo, MenTShirtsInfo} from "../../models/categories/men";
import {BlousesInfo, WomenShirtsInfo, WomenTShirtsInfo} from "../../models/categories/women";

export type ProductSubCategoriesType = GlovesInfo |
    HeadWearsInfo |
    MenShirtsInfo |
    MenTShirtsInfo |
    BlousesInfo |
    WomenShirtsInfo |
    WomenTShirtsInfo | null;