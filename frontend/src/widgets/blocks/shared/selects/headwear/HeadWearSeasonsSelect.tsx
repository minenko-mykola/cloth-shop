"use client";
import { Select} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

import {headwear_seasons} from "@/shared/data/headwear";
import {HeadWearSeason} from "@/widgets/blocks/shared/state-managers";
import {HeadWearSeasons as Seasons} from "@/shared/generated/entities/database/types/enum/headwear";
import {headwear_season_adapter} from "@/shared/data/headwear/adapters";
import {CreateProductHookStore} from "@/widgets/blocks/shared/state-managers/hooks";

export const HeadWearSeasonsSelect =  observer(() =>
{
    const hook = CreateProductHookStore.hook!;
    const {watch,register,trigger,setValue} = hook;
    const isSubmitted = CreateProductHookStore.isSubmitted;
    const [seasonValidity, setSeasonValidity] = useState<boolean>();

    return (
        <section>
            <Select.Root invalid={seasonValidity}
                         required
                         collection={headwear_seasons}
                         size="sm"
                         value={HeadWearSeason.season}
                         onValueChange={(e) => {
                             const selected = e.value;
                             HeadWearSeason.setSeason(selected);

                             const enumValue = Seasons[
                                 headwear_season_adapter(selected[0]) as keyof typeof Seasons]

                             setValue("info.season",enumValue,{
                                 shouldValidate : true
                             })
                         }}>
                <Select.HiddenSelect {...register("info.season",{
                    required : true
                })} />
                <Select.Label>Season</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Select season" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                    <Select.Content>
                        {headwear_seasons.items.map((season) => (
                            <Select.Item item={season} key={season.value}>
                                {season.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Select.Root>
        </section>
    )
})