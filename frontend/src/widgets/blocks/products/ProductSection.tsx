import React from 'react';
import {ProductStore} from "@/widgets/blocks/shared/state-managers";
import {Box} from "@chakra-ui/react";
import {ProductCard} from "@/widgets/blocks/products/ProductCard.tsx";
import {observer} from "mobx-react-lite";

export const ProductSection = observer(() => {
    return (
        <>
            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gap="5"
                padding="5"
                width="100%"
                height="100%"
            >
                {
                    ProductStore.products.length > 0 ? <>
                        {
                        ProductStore.products.map(product => (

                            <ProductCard key={product.product_info?.id} product_info={product.product_info} category_info={product.category_info} />
                        ))
                    }</> : <>No products</>
                }
            </Box>
        </>
    );
});