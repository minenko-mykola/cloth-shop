"use client";
import {Button, CloseButton, Drawer, Portal} from "@chakra-ui/react";
import React from 'react';

export const LeftMenu = () => {
    return (
        <section>
            <Drawer.Root placement="start">
                <Drawer.Trigger asChild>
                    <Button variant="subtle" size="sm">
                        Open Drawer
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                                <Drawer.Title>Drawer Title</Drawer.Title>
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
