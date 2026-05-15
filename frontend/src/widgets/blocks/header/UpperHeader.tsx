import React from 'react';
import {Flex, Link} from "@chakra-ui/react";
import {LogoIcon} from "@/shared/custom-icons";
import {DebugModal} from "@/shared/else";
import {SearchBar} from "@/widgets/blocks/header";
import {CartDrawer, CheckoutForm} from "@/widgets/blocks/carts";

export const UpperHeader = () => {
    return (
        <section>
            <Flex direction="row" pl="1%" pt="0.5%" pb="0.5%" justifyContent="space-between" align="center"
                  bg="green.500">
                <Link href="/">
                    <LogoIcon></LogoIcon>
                </Link>
                <SearchBar></SearchBar>
                <CartDrawer></CartDrawer>
            </Flex>
            <DebugModal></DebugModal>
            <CheckoutForm></CheckoutForm>
        </section>
    );
};