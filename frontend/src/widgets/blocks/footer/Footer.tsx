"use client";

import React from 'react';
import {Flex, Heading, Separator, Link} from "@chakra-ui/react";
import CompanyInfoSection from "@/shared/sections/CompanyInfoSection.tsx"
import HelpSection from "@/shared/sections/HelpSection.tsx";
import ServicesSection from "@/shared/sections/ServicesSection.tsx";

export const Footer = () => {
    return (
        <footer>
            <section>
                <section>
                    <Flex wrap="wrap" justify="space-around" direction="row" pt="0.5%" pb="0.5%" >
                        <CompanyInfoSection></CompanyInfoSection>
                        <HelpSection></HelpSection>
                        <ServicesSection></ServicesSection>
                    </Flex>
                </section>
                <Separator orientation="horizontal" />
                <section>
                    <Flex align="center"pt="0.5%" pb="0.5%" justifyContent="space-between" direction="row" >
                        <Link href="/credits" ml="14%">Credits page</Link>
                        <Heading color="silver" size="sm" fontWeight="normal" mr="14%">&copy;2025 - 2025 [name]</Heading>
                    </Flex>
                </section>
            </section>
        </footer>
    );
};

