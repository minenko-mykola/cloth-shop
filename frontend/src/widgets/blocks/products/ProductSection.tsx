import React from 'react';
import {Box} from "@chakra-ui/react";

export const ProductSection = () => {
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
            </Box>
        </>
    );
};