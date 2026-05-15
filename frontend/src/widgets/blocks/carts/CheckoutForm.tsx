import {Button, CloseButton, Dialog, Portal, Stack} from "@chakra-ui/react";
import React from 'react';
import {CheckoutFormControl} from "@/widgets/blocks/shared/state-managers";
import {CheckoutFormHook} from "@/widgets/blocks/shared/state-managers/hooks";
import {observer} from "mobx-react-lite";

export const CheckoutForm = observer(() => {

    const hook = CheckoutFormHook.hook!;

    const {register,handleSubmit} = hook;

    const onSubmit = (data : any) =>
    {

    }

    return (
        <section>
            <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <Dialog.Root
                    lazyMount
                    open={CheckoutFormControl.isOpened}

                    onOpenChange={() => {
                        CheckoutFormControl.setIsOpened(false);
                    }}>
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
});