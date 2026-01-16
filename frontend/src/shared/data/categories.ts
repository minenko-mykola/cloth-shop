import {createListCollection} from "@chakra-ui/react";
import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";

export const categories = createListCollection({
    items: [
        { label: "Gloves", value: "gloves" , keyAdapter : SubCategoryTypes.GlovesCategory },
        { label: "HeadWear", value: "headwear" , keyAdapter : SubCategoryTypes.HeadWearCategory },
        { label: "Men Shirts", value: "men-shirts" , keyAdapter : SubCategoryTypes.MenShirtCategory },
        { label: "Women Shirts", value: "women-shirts" , keyAdapter : SubCategoryTypes.WomenShirtCategory },
        { label: "Women T-shirts", value: "women-tshirts" , keyAdapter : SubCategoryTypes.WomenTShirtCategory },
        { label: "Blouses", value: "blouses", keyAdapter : SubCategoryTypes.BlousesCategory }
    ],
})