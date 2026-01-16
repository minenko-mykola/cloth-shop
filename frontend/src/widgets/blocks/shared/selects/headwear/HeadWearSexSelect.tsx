"use client";
import { Select} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

import {headwear_sex} from "@/shared/data/headwear";
import {HeadWearSex} from "@/widgets/blocks/shared/state-managers";
import {HeadWearSex as Sex} from "@/shared/generated/entities/database/types/enum/headwear";
import {headwear_sex_adapter} from "@/shared/data/headwear/adapters";
import {CreateProductHookStore} from "@/widgets/blocks/shared/state-managers/hooks";

export const HeadWearSexSelect =  observer(() =>
{
    const hook = CreateProductHookStore.hook!;
    const [sexValidity,setSexValidity] = useState<boolean>()
    const {register,watch,trigger,setValue} = hook
    const isSubmitted = CreateProductHookStore.isSubmitted;

    return (
        <section>
            <Select.Root required
                         collection={headwear_sex}
                         size="sm" value={HeadWearSex.sex}
                         invalid={sexValidity}
                         onValueChange={(e) => {
                const selected = e.value
                HeadWearSex.setSex(selected);

                const enumValue = Sex[headwear_sex_adapter(selected[0]) as keyof typeof Sex];
                if (enumValue) {
                    setValue("info.sex", enumValue, { shouldValidate: true });
                } else {
                    console.warn("Unknown sex:", selected);
                }
            }}>
                <Select.HiddenSelect {...register("info.sex",{
                    required : true
                })} />
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
})