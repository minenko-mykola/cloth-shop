"use client";

import React from 'react';
import {
    Button,
    CloseButton,
    Dialog,
    Portal,
    Stack
} from "@chakra-ui/react";
import {AddPhotoForm, CreateProductInfoForm} from "@/widgets/blocks/shared/categories";

export const ProductForm = () => {

    return (
        <section>
            <form id="product-create-form">
                <Dialog.Root placement="center">
                    <Dialog.Trigger asChild>
                        <Button variant="subtle">Create</Button>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Create product form</Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <Stack direction="column">
                                        <CreateProductInfoForm></CreateProductInfoForm>
                                        <AddPhotoForm></AddPhotoForm>
                                    </Stack>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </Dialog.ActionTrigger>
                                    <Button type="submit"
                                            form="product-create-form"
                                            onClick={() => {

                                            }}
                                    >Save</Button>
                                </Dialog.Footer>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </form>
        </section>
    )
}
