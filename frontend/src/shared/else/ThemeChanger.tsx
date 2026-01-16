"use client";

import React from 'react';
import {useColorMode} from "@/shared/chakra-ui";
import {Button,Switch,Icon} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa"

export const ThemeChanger = () => {
    const {colorMode,toggleColorMode} = useColorMode()
    return (
        <>
            <Switch.Root colorPalette="blue" size="lg" onChange={toggleColorMode}>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                    <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                        <Icon as={FaSun} color="yellow.400" />
                    </Switch.Indicator>
                </Switch.Control>
            </Switch.Root>
        </>
    );
};

