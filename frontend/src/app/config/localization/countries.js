import {createListCollection} from "@chakra-ui/react";
import {groupBy} from "es-toolkit";

export const countries = createListCollection({
    items: [
        { value: "US", label: "United States", flag: "🇺🇸", continent: "America", keyAdapter : "en" },
        { value: "RU", label: "Russia", flag: "🇷🇺", continent: "Europe", keyAdapter : "ru" },
        { value: "UA", label: "Ukraine", flag: "🇺🇦", continent: "Europe", keyAdapter : "ua" }
    ],
    itemToString: (item) => `${item.flag} ${item.label}`,
    itemToValue: (item) => item.value,
})

export const continents = Object.entries(
    groupBy(countries.items, (item) => item.continent),
)