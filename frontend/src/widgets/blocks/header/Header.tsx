"use client";

import React from 'react';
import {Button, Flex} from "@chakra-ui/react";
import {DownHeader,UpperHeader} from "@/widgets/blocks/header";

export const Header = () => {
    return (
        <header>
            <Flex direction="column">
                <UpperHeader></UpperHeader>
                <DownHeader></DownHeader>
            </Flex>
        </header>
    );
};

