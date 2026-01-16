"use client";
import React from 'react';
import {Heading, Stack,Link} from "@chakra-ui/react";

const ServicesSection = () => {
    return (
        <section>
            <Heading color="silver" size="sm" fontWeight="normal">Services</Heading>
            <Stack direction="column">
                <Link href="#" variant="plain" _hover = {{ color : "green" }}>Sell on [name]</Link>
                <Link href="#" variant="plain" _hover = {{ color : "green" }}>Corporative clients</Link>
            </Stack>
        </section>
    );
};

export default ServicesSection;