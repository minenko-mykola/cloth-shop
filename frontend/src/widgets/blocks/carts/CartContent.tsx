"use client";
import React from 'react';
import {Button, EmptyState, ScrollArea, Stack, Text, VStack} from "@chakra-ui/react";
import {LuShoppingCart} from "react-icons/lu";

export const CartContent = () => {


    return (
        <section>
            <Stack height="100vh">
                <ScrollArea.Root height="auto" size="md" variant="always">
                    <ScrollArea.Viewport>
                        <ScrollArea.Content paddingEnd="3" textStyle="sm">
                            <Stack gap="20px">
                                <EmptyState.Root size="sm">
                                    <EmptyState.Content>
                                        <EmptyState.Indicator>
                                            <LuShoppingCart />
                                        </EmptyState.Indicator>
                                        <VStack textAlign="center">
                                            <EmptyState.Title>Your cart is empty</EmptyState.Title>
                                            <EmptyState.Description>
                                                Explore our products and add items to your cart
                                            </EmptyState.Description>
                                        </VStack>
                                    </EmptyState.Content>
                                </EmptyState.Root>
                            </Stack>
                        </ScrollArea.Content>
                    </ScrollArea.Viewport>
                </ScrollArea.Root>
                <Text fontWeight="bold" mt="20px" fontSize="xl">Sum:</Text>
            </Stack>
        </section>
    );
};
