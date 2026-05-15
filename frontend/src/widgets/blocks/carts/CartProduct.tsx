"use client";
import React, {useState} from 'react';
import {ClientProductType} from "@/shared/generated/entities/database/types/enum";
import {Button, Card, HStack, IconButton, NumberInput, Stack} from "@chakra-ui/react";
import {LuMinus, LuPlus} from "react-icons/lu";

export const CartProduct = (product : ClientProductType) => {
    const [value,setValue] = useState<string>("1");

    return (
        <section>
            <Card.Root width="400px" overflow="hidden" variant="subtle">
                <Card.Body gap="2">
                    <Card.Title>{product.product_info?.name}</Card.Title>
                    <Card.Description>
                        Quantity: {product.product_info?.quantity}
                        Price: {product.category_info?.price}
                        Sub total:{product.product_info?.quantity * product.category_info!.price}
                    </Card.Description>
                </Card.Body>
                <Card.Footer gap="2">
                    <Stack direction="row" width="95%" justifyContent="space-between">
                        <Button onClick={() => {

                        }}>Remove</Button>
                        <NumberInput.Root min={1}
                                          value={value}
                                          onValueChange={(e) => {
                                              setValue(e.value)
                                          }}
                                          max={product.product_info?.quantity}
                                          defaultValue="1" unstyled spinOnPress>
                            <HStack gap="2">
                                <NumberInput.DecrementTrigger asChild>
                                    <IconButton variant="outline" size="sm">
                                        <LuMinus />
                                    </IconButton>
                                </NumberInput.DecrementTrigger>
                                <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                                <NumberInput.IncrementTrigger asChild>
                                    <IconButton variant="outline" size="sm">
                                        <LuPlus />
                                    </IconButton>
                                </NumberInput.IncrementTrigger>
                            </HStack>
                        </NumberInput.Root>
                    </Stack>
                </Card.Footer>
            </Card.Root>
        </section>
    );
};