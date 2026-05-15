"use client";
import {Field, Select} from "@chakra-ui/react";
import React from "react";
import {gloves_sizes} from "@/shared/data/gloves";
import {GlovesSize as Size} from "@/shared/generated/entities/database/types/enum"

import {gloves_size_adapter} from "@/shared/data/headwear/adapters";

export const GlovesSizeSelect =  () =>
{

    return (
        <section>
            <Field.Root>
                <Select.Root collection={gloves_sizes}
                    size="sm"
                    onValueChange={(e) => {
                        const selected = e.value;

                        const enumValue = Size[gloves_size_adapter(selected[0]) as keyof typeof Size];
                        if (enumValue) {

                        } else {
                            console.warn("Unknown size:", selected);
                        }
                    }}
                >
                    <Select.HiddenSelect />
                    <Select.Label>Size</Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select size" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Select.Positioner>
                        <Select.Content>
                            {gloves_sizes.items.map((size) => (
                                <Select.Item item={size} key={size.value}>
                                    {size.label}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Select.Root>
                <Field.ErrorText>{}</Field.ErrorText>
            </Field.Root>
        </section>
    )
}