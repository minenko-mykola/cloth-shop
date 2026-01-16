"use client"
import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, CloseButton, Dialog,Portal} from "@chakra-ui/react";
import {
    ErrorModalContent,
    ErrorModalHandler

} from "@/widgets/blocks/shared/state-managers";

export const DebugModal = observer(() => {

    return (
        <section>
            <Dialog.Root
                lazyMount
                open={ErrorModalHandler.open}

                onOpenChange={() => {
                    ErrorModalHandler.setOpen(false);
                }}>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>{ErrorModalContent.content.type}</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <p>
                                    {ErrorModalContent.content.message}
                                </p>
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button>Close</Button>
                                </Dialog.ActionTrigger>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </section>
    );
});