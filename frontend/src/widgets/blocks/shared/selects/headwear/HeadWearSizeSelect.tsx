"use client";
import { headwear_sizes } from "@/shared/data/headwear";
import { Select} from "@chakra-ui/react";
import React from "react";

export const HeadWearSizeSelect = () =>
{

    return (
        <section>
            <Select.Root required collection={headwear_sizes} size="sm">
                <Select.HiddenSelect />
                <Select.Label>Size</Select.Label>
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
                        {headwear_sizes.items.map((size) => (
                            <Select.Item item={size} key={size.value}>
                                {size.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Select.Root>
        </section>
    )
}