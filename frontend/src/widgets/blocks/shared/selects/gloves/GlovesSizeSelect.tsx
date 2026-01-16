"use client";
import {Field, Select} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {gloves_sizes} from "@/shared/data/gloves";
import {GlovesSize} from "@/widgets/blocks/shared/state-managers";
import {GlovesSize as Size} from "@/shared/generated/entities/database/types/enum"

import {gloves_size_adapter} from "@/shared/data/headwear/adapters";
import {CreateProductHookStore} from "@/widgets/blocks/shared/state-managers/hooks";

export const GlovesSizeSelect =  observer(() =>
{
    const hook = CreateProductHookStore.hook!;
    const isSubmitted = CreateProductHookStore.isSubmitted;
    const {trigger,watch,register,setValue} = hook;

    const sizeValue = watch("info.size")
    const [sizeValidity, setSizeValidity] = useState<boolean>(false);

    useEffect(() => {
        trigger("info.size").then(res => {
            setSizeValidity(!res && isSubmitted);
        });
    }, [sizeValue, trigger,isSubmitted]);

    return (
        <section>
            <Field.Root>
                <Select.Root collection={gloves_sizes}
                    invalid={sizeValidity}
                    size="sm"
                    value={GlovesSize.size}
                    onValueChange={(e) => {
                        const selected = e.value;
                        GlovesSize.setSize(selected);

                        const enumValue = Size[gloves_size_adapter(selected[0]) as keyof typeof Size];
                        if (enumValue) {
                            setValue("info.size", enumValue, { shouldValidate: true });
                        } else {
                            console.warn("Unknown size:", selected);
                        }
                    }}
                >
                    <Select.HiddenSelect
                        {...register("info.size", {
                            required: "Please select size",
                        })}
                    />
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
})