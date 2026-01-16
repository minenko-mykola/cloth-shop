"use client";
import React from 'react';
import {Heading,Stack,Link} from "@chakra-ui/react";

const CompanyInfoSection = () => {
    return (
        <section>
            <Heading color="silver" size="sm" fontWeight="normal">Company info</Heading>
            <Stack direction="column">
                <Link href="#" variant="plain" _hover={{color : "green"}}>About us</Link>
                <Link href="#" variant="plain" _hover={{color : "green"}}>Terms of usage</Link>
                <Link href="#" variant="plain" _hover={{color : "green"}}>Contacts</Link>
            </Stack>
        </section>
    );
};

export default CompanyInfoSection;