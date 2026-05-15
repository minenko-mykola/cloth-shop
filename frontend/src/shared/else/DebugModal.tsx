"use client"
import React from 'react';
import {Button, CloseButton, Dialog,Portal} from "@chakra-ui/react";

export const DebugModal = () => {

    return (
        <section>
            <Dialog.Root
                lazyMount>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title></Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <p>

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
};