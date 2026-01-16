import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";
import {GlovesInfo, HeadWearsInfo} from "@/shared/generated/entities/database/models/categories/accessories";
import {BlousesInfo, WomenShirtsInfo} from "@/shared/generated/entities/database/models/categories/women";
import {MenShirtsInfo, MenTShirtsInfo} from "@/shared/generated/entities/database/models/categories/men";

export const category_adaper = [
    { category : SubCategoryTypes.GlovesCategory, model : GlovesInfo },
    { category : SubCategoryTypes.HeadWearCategory, model : HeadWearsInfo },
    { category : SubCategoryTypes.BlousesCategory, model : BlousesInfo },
    { category : SubCategoryTypes.MenShirtCategory, model : MenShirtsInfo },
    { category : SubCategoryTypes.MenTShirtCategory, model : MenTShirtsInfo },
    { category : SubCategoryTypes.WomenShirtCategory, model : WomenShirtsInfo },
    { category : SubCategoryTypes.WomenTShirtCategory, model : WomenShirtsInfo }
]