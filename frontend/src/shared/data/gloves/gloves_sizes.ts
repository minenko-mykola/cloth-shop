import {createListCollection} from "@chakra-ui/react";

export const gloves_sizes = createListCollection({
    items: [
        { label: "XS", value: "xs" },
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl" }
    ],
})