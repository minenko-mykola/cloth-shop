"use client";
import React from 'react';
import {Button, CloseButton, Drawer, Image, Portal} from "@chakra-ui/react";
import {CartContent} from "@/widgets/blocks/carts";
import {FaShoppingCart} from "react-icons/fa";

export const CartDrawer = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <section>
                <Drawer.Root open={open} onOpenChange={(e) => {
                    setOpen(e.open);
                }} size="sm">
                    <Drawer.Trigger asChild>
                        <Button variant="ghost" size="xl">
                            <FaShoppingCart />
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
};
