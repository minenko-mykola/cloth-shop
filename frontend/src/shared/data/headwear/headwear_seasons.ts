
import {createListCollection} from "@chakra-ui/react";

export const headwear_seasons = createListCollection({
    items: [
        { label: "Winter", value: "winter" },
        { label: "Demiseasonal", value: "demiseasonal" },
        { label: "Summer", value: "summer" },
        { label: "Spring", value: "spring" },
        { label: "Autumn", value: "autumn" }
    ],
})