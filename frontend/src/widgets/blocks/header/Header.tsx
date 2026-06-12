"use client";

import React from 'react';
import {Button, Flex} from "@chakra-ui/react";
import {DownHeader,UpperHeader} from "@/widgets/blocks/header";

export const Header = () => {
    return (
        <header>
            <Flex direction="column">
                <UpperHeader></UpperHeader>
                <Button>Click 2</Button>
                <DownHeader></DownHeader>
            </Flex>
        </header>
    );
};

