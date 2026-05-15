import {Button, CloseButton, Dialog, Portal, Stack} from "@chakra-ui/react";
import React from 'react';

export const CheckoutForm = () => {

    return (
        <section>
            <form id="checkout-form">
                <Dialog.Root
                    lazyMount>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Checkout Form</Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <section>
                                        <Stack>
                                            Info
                                        </Stack>
                                    </section>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline" type="reset">Cancel</Button>
                                    </Dialog.ActionTrigger>
                                    <Button type="submit" form="checkout-form">Checkout</Button>
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
    );
};