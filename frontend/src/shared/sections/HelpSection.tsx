"use client";
import React from 'react';
import {Heading, Stack,Link} from "@chakra-ui/react";

const HelpSection = () => {
    return (
        <section>
            <Heading color="silver" size="sm" fontWeight="normal">Help</Heading>
            <Stack direction="column">
                <Link href="#" variant="plain" _hover={{color : "green" }}>Delivery and payments</Link>
                <Link href="#" variant="plain" _hover={{color : "green" }}>Warranty</Link>
                <Link href="#" variant="plain" _hover={{color : "green" }}>Return</Link>
            </Stack>
        </section>
    );
};

export default HelpSection;