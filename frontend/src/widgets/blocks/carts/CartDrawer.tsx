"use client";
import React from 'react';
import {Button, CloseButton, Drawer, Portal} from "@chakra-ui/react";
import {CartContent} from "@/widgets/blocks/carts/CartContent.tsx";
import {observer} from "mobx-react-lite";
import {CheckoutFormControl} from "@/widgets/blocks/shared/state-managers";

export const CartDrawer = observer(() => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <section>
                <Drawer.Root open={open} onOpenChange={(e) => {
                    setOpen(e.open);
                }} size="sm">
                    <Drawer.Trigger asChild>
                        <Button variant="outline" size="sm">
                            Open Cart
                        </Button>
                    </Drawer.Trigger>
                    <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title>Cart View</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>
                                    <CartContent></CartContent>
                                </Drawer.Body>
                                <Drawer.Footer>
                                    <Button variant="outline" onClick={() => {
                                        setOpen(false)
                                    }} >Cancel</Button>
                                    <Button onClick={() => {
                                       CheckoutFormControl.setIsOpened(true)
                                    }}>
                                        Checkout</Button>
                                </Drawer.Footer>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </section>
        </>
    );
});
