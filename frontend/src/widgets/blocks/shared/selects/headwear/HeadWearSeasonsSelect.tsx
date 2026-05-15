"use client";
import { Select} from "@chakra-ui/react";
import React from "react";

import {headwear_seasons} from "@/shared/data/headwear";
import {HeadWearSeasons as Seasons} from "@/shared/generated/entities/database/types/enum/headwear";
import {headwear_season_adapter} from "@/shared/data/headwear/adapters";

export const HeadWearSeasonsSelect =  () =>
{

    return (
        <section>
            <Select.Root
                         required
                         collection={headwear_seasons}
                         size="sm"
                         onValueChange={(e) => {
                             const selected = e.value;

                             const enumValue = Seasons[
                                 headwear_season_adapter(selected[0]) as keyof typeof Seasons]

                         }}>
                <Select.HiddenSelect />
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
};