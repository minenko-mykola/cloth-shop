"use client"

import { Portal, Select } from "@chakra-ui/react"
import {countries,continents} from "@/app/config/localization/countries"
import {useTranslation} from "react-i18next";

export const LanguageChanger = () => {
    const [t,i18n] = useTranslation();

    return (
        <Select.Root
            collection={countries}
            size="sm"
            width="320px"
            variant="subtle"
        >
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="-" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {continents.map(([continent, items]) => (
                            <Select.ItemGroup key={continent}>
                                <Select.ItemGroupLabel>{continent}</Select.ItemGroupLabel>
                                {items.map((item) => (
                                    <Select.Item item={item} key={item.value}>
                                        {item.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.ItemGroup>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}