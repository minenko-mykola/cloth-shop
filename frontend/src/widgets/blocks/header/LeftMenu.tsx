"use client";
import {Box, Button, CloseButton, Drawer,Text, Portal, VStack} from "@chakra-ui/react";
import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";

export const LeftMenu = () => {
    return (
        <section>
            <Drawer.Root placement="start">
                <Drawer.Trigger asChild>
                    <Button variant="ghost" size="xl">
                        <GiHamburgerMenu />
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                                <Drawer.Title>Menu</Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body>

                            </Drawer.Body>
                            <Drawer.Footer>
                                <Button variant="outline">Cancel</Button>
                                <Button>Save</Button>
                            </Drawer.Footer>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </section>
    );
};
