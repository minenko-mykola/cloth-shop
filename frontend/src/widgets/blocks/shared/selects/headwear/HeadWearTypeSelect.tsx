"use client";
import { Select} from "@chakra-ui/react";
import React from "react";
import {observer} from "mobx-react-lite";
import {HeadWearType} from "@/widgets/blocks/shared/state-managers";
import {headwear_types} from "@/shared/data/headwear";

export const HeadWearTypeSelect =  observer(() =>
{

    return (
        <section>
            <Select.Root required collection={headwear_types} size="sm" value={HeadWearType.type} onValueChange={(e) => {
                HeadWearType.setType(e.value);
            }}>
                <Select.HiddenSelect />
                <Select.Label>Type</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                    <Select.Content>
                        {headwear_types.items.map((type) => (
                            <Select.Item item={type} key={type.value}>
                                {type.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Select.Root>
        </section>
    )
})