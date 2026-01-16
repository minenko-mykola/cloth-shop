import {createListCollection} from "@chakra-ui/react";

export const headwear_types = createListCollection({
    items: [
        { label: "BaseballCap", value: "baseballcap" },
        { label: "ClassicCap", value: "classiccap" },
        { label: "Hat", value: "hat" }
    ],
})