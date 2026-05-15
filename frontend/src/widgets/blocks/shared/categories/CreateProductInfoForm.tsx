"use client";
import { Field, Input, Stack } from "@chakra-ui/react";
import { CategoryForm } from "@/widgets/blocks/shared/categories";

export const CreateProductInfoForm = () => {

    return (
        <Stack direction="column">
            <Field.Root required>
                <Field.Label>
                    Name<Field.RequiredIndicator />
                </Field.Label>

                <Input />
            </Field.Root>

            <Field.Root required>
                <Field.Label>
                    Description<Field.RequiredIndicator />
                </Field.Label>

                <Input />
            </Field.Root>

            <CategoryForm />
        </Stack>
    );
};
