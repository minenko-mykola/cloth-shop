"use client";
import { Select} from "@chakra-ui/react";
import React from "react";

import {headwear_sex} from "@/shared/data/headwear";
import {HeadWearSex as Sex} from "@/shared/generated/entities/database/types/enum/headwear";
import {headwear_sex_adapter} from "@/shared/data/headwear/adapters";

export const HeadWearSexSelect =  () =>
{

    return (
        <section>
            <Select.Root required
                         collection={headwear_sex}
                         size="sm"
                         onValueChange={(e) => {
                const selected = e.value

                const enumValue = Sex[headwear_sex_adapter(selected[0]) as keyof typeof Sex];
            }}>
                <Select.HiddenSelect />
                <Select.Label>Sex</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Select sex" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                    <Select.Content>
                        {headwear_sex.items.map((sex) => (
                            <Select.Item item={sex} key={sex.value}>
                                {sex.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Select.Root>
        </section>
    )
}