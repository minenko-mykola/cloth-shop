"use client";
import { Field, Input, Stack } from "@chakra-ui/react";
import { CategoryForm } from "@/widgets/blocks/shared/categories";
import { CreateProductHookStore } from "@/widgets/blocks/shared/state-managers/hooks";

export const CreateProductInfoForm = () => {

    const hook = CreateProductHookStore.hook!;
    const { register, formState : {errors} } = hook;
    const isSubmitted = CreateProductHookStore.isSubmitted;

    return (
        <Stack direction="column">
            <Field.Root required>
                <Field.Label>
                    Name<Field.RequiredIndicator />
                </Field.Label>

                <Input
                    {...register("name", {
                        required: true,
                        minLength: 10,
                        maxLength: 100,
                    })}
                />
            </Field.Root>

            <Field.Root required>
                <Field.Label>
                    Description<Field.RequiredIndicator />
                </Field.Label>

                <Input
                    {...register("description", {
                        required: true,
                        minLength: 10,
                        maxLength: 100,
                    })}
                />
            </Field.Root>

            <CategoryForm />
        </Stack>
    );
};
