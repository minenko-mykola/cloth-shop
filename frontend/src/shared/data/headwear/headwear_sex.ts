
import {createListCollection} from "@chakra-ui/react";

export const headwear_sex = createListCollection({
    items: [
        { label: "Male", value: "male",adapter : "Male" },
        { label: "Female", value: "female",adapter : "Female" },
        { label: "Unisex", value: "unisex",adapter : "Unisex" }
    ],
})