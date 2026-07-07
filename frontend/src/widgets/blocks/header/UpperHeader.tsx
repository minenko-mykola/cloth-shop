import React from 'react';
import {Flex, Link} from "@chakra-ui/react";
import {LogoIcon} from "@/shared/custom-icons";
import {DebugModal} from "@/shared/else";
import {LeftMenu, SearchBar, UserProfileMenu} from "@/widgets/blocks/header";
import {CartDrawer, CheckoutForm} from "@/widgets/blocks/carts";

export const UpperHeader = () => {
    return (
        <section>
            <Flex direction="row" pt="0.5%" pb="0.5%" justifyContent="space-between" align="center"
                  bg="green.500">
                <Flex direction="row" pr="3%">
                    <LeftMenu></LeftMenu>
                    <Link href="/">
                        <LogoIcon></LogoIcon>
                    </Link>
                </Flex>
                <Flex direction="row" justifyContent="center">
                    <SearchBar></SearchBar>
                </Flex>
                <Flex direction="row">
                    <CartDrawer></CartDrawer>
                    <UserProfileMenu></UserProfileMenu>
                </Flex>
            </Flex>
            <DebugModal></DebugModal>
            <CheckoutForm></CheckoutForm>
        </section>
    );
};