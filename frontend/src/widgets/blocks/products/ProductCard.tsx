"use client";

import React from 'react';
import {Button, Card, Image, LinkBox,Text} from "@chakra-ui/react";
import {ClientProductType, SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";
import {observer} from "mobx-react-lite";
import {CartProducts, cartTotalPrice, ProductViewerControl} from "@/widgets/blocks/shared/state-managers";
import {useRouter} from "next/navigation";

function renderProductProperties(product: ClientProductType)
{
    switch (product.product_info?.category)
    {
        case SubCategoryTypes.GlovesCategory:
            return (
                <div>
                    Gloves
                </div>
            )
        case SubCategoryTypes.HeadWearCategory:
            return (
                <div>Headwear</div>
            )
        default:
            return (
                <div>{product.product_info?.category}</div>
            )
    }
}

export const ProductCard = observer((product: ClientProductType) => {
    const router = useRouter();
    const button_text = CartProducts.isAdded(product) ? "Added to cart" : "Add to cart";

    const handleClick = () => {
        ProductViewerControl.setProduct(product);
        router.push(`/products/view/${product.product_info.id}`);
    }

    return (
        <section>
            <LinkBox onClick={() => {
                handleClick();
            }}>
                <Card.Root maxW="250px" _hover={{ cursor : "pointer" }} >
                    <Card.Header>
                        <Card.Description>
                            <Image src="" alt="Image"></Image>
                        </Card.Description>
                    </Card.Header>
                    <Card.Body>
                        {renderProductProperties(product)}  {/* Виведення властивостей продукту */}
                        <Text fontWeight="bolder">{product.category_info?.price}</Text>
                        <Text>{product.product_info?.name}</Text>
                        <Text>{product.category_info?.size}</Text>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button variant="solid" onClick={(e) => {
                            CartProducts.addProduct(product);
                            cartTotalPrice.addProduct(product)
                            e.stopPropagation()
                        }} disabled={CartProducts.isAdded(product)}>{button_text}</Button>
                    </Card.Footer>
                </Card.Root>
            </LinkBox>
        </section>
    );
});