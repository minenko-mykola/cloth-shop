"use client";

import { Field, Select } from "@chakra-ui/react";
import { categories } from "@/shared/data/gloves";

export const CategorySelect = () => {

    return (
        <section>
            <Field.Root>
                <Select.Root
                    collection={categories}
                    size="sm"
                    onValueChange={(e) => {

                    }}
                >
                    {/* Hidden select → реєструє поле в react-hook-form */}
                    <Select.HiddenSelect

                    />

                    <Select.Label>Category</Select.Label>

                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select category" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>

                    <Select.Positioner>
                        <Select.Content>
                            {categories.items.map((item) => (
                                <Select.Item item={item} key={item.value}>
                                    {item.label}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Select.Root>

                <Field.ErrorText>
                </Field.ErrorText>
            </Field.Root>
        </section>
    );
};
