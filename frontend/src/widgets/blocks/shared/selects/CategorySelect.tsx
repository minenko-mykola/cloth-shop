"use client";

import { Field, Select } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { categories } from "@/shared/data/gloves";
import { Category } from "../state-managers"; // MobX store
import { CreateProductHookStore } from "@/widgets/blocks/shared/state-managers/hooks";

export const CategorySelect = observer(() => {

    const hook = CreateProductHookStore.hook!;
    const {
        register,
        setValue,
        trigger,
        formState: { errors, isSubmitted }
    } = hook;

    return (
        <section>
            <Field.Root invalid={!!errors.category && isSubmitted}>
                <Select.Root
                    collection={categories}
                    size="sm"
                    value={Category.category}
                    onValueChange={(e) => {
                        // 1. Оновлюємо MobX
                        Category.setCategory(e.value);

                        // 2. Оновлюємо форму (важливо — shouldValidate!)
                        setValue("category", e.value, {
                            shouldValidate: true,
                            shouldDirty: true,
                        });
                    }}
                    onBlur={() => trigger("category")} // ← обов’язковий крок
                >
                    {/* Hidden select → реєструє поле в react-hook-form */}
                    <Select.HiddenSelect
                        {...register("category", {
                            required: "Please select a category",
                        })}
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
                    {errors.category?.message}
                </Field.ErrorText>
            </Field.Root>
        </section>
    );
});
