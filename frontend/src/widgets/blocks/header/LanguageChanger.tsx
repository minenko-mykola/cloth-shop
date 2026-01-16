"use client"

import { Portal, Select } from "@chakra-ui/react"
import {countries,continents} from "@/app/config/localization/countries"
import {useTranslation} from "react-i18next";
import {Country} from "@/widgets/blocks/shared/state-managers";
import {observer} from "mobx-react-lite";

export const LanguageChanger = observer(() => {
    const [t,i18n] = useTranslation();

    return (
        <Select.Root
            collection={countries}
            size="sm"
            width="320px"
            variant="subtle"
            value={Country.country}
            onValueChange = {(e) => {
               Country.setCountry(e.value)
            }}
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
})

export default LanguageChanger;