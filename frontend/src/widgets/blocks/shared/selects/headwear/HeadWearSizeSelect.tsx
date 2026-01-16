"use client";
import { Select} from "@chakra-ui/react";
import React from "react";
import {observer} from "mobx-react-lite";
import {HeadWearSize} from "@/widgets/blocks/shared/state-managers";
import {headwear_sizes} from "@/shared/data/headwear";

export const HeadWearSizeSelect =  observer(() =>
{

    return (
        <section>
            <Select.Root required collection={headwear_sizes} size="sm" value={HeadWearSize.size} onValueChange={(e) => {
                HeadWearSize.setSize(e.value);
            }}>
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
})