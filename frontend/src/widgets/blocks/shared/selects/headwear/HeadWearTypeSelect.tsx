"use client";
import { Select} from "@chakra-ui/react";
import React from "react";
import {headwear_types} from "@/shared/data/headwear";

export const HeadWearTypeSelect =  () =>
{

    return (
        <section>
            <Select.Root required collection={headwear_types} size="sm" >
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
}