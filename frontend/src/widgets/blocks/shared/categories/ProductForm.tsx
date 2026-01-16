"use client";

import React, {useEffect} from 'react';
import {
    Button,
    CloseButton,
    Dialog,
    Portal,
    Stack
} from "@chakra-ui/react";
import {AddPhotoForm, CreateProductInfoForm} from "@/widgets/blocks/shared/categories";
import {observer} from "mobx-react-lite";
import {CreateProductHookStore} from "@/widgets/blocks/shared/state-managers/hooks";

export const ProductForm = observer(() => {

   const hooks = CreateProductHookStore.hook!

    const onSubmit = (data: any) =>
    {
        alert(JSON.stringify(data));
    }

    return (
        <section>
            <form onSubmit={hooks?.handleSubmit(onSubmit)} id="product-create-form">
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
                                                CreateProductHookStore.setIsSubmitted(true);
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
})
