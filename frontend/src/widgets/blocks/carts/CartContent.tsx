"use client";
import React from 'react';
import {EmptyState, ScrollArea, Stack, Text, VStack} from "@chakra-ui/react";
import {CartProducts, cartTotalPrice} from "@/widgets/blocks/shared/state-managers";
import {observer} from "mobx-react-lite";
import CartProduct from "@/widgets/blocks/carts/CartProduct.tsx";
import {LuShoppingCart} from "react-icons/lu";

export const CartContent = observer(() => {

    return (
        <section>
            <Stack height="100vh">
                <ScrollArea.Root height="auto" size="md" variant="always">
                    <ScrollArea.Viewport>
                        <ScrollArea.Content paddingEnd="3" textStyle="sm">
                            <Stack gap="20px">
                                {
                                    CartProducts.products.length > 0 ? CartProducts.products.map(product => (
                                        <CartProduct product_info={product.product_info}
                                                     category_info={product.category_info}
                                                     key={product.product_info?.id} />
                                    )) :
                                        <>
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
                                        </>
                                }
                            </Stack>
                        </ScrollArea.Content>
                    </ScrollArea.Viewport>
                </ScrollArea.Root>
                <Text fontWeight="bold" mt="20px" fontSize="xl">Sum:{cartTotalPrice.total}</Text>
            </Stack>
        </section>
    );
});
