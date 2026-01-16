import React from 'react';
import {Flex, Link} from "@chakra-ui/react";
import {LogoIcon} from "@/shared/custom-icons";
import {DebugModal, ThemeChanger} from "@/shared/else";
import {SearchBar} from "@/widgets/blocks/header/SearchBar.tsx";
import {ProductForm} from "@/widgets/blocks/shared/categories";
import {UserProfile} from "@/widgets/blocks/header/UserProfile.tsx";
import {CartDrawer, CheckoutForm} from "@/widgets/blocks/carts";
import LanguageChanger from "@/widgets/blocks/header/LanguageChanger.tsx";

export const UpperHeader = () => {
    return (
        <section>
            <Flex direction="row" pl="1%" pt="0.5%" pb="0.5%" justifyContent="space-between" align="center"
                  bg="green.500">
                <Link href="/">
                    <LogoIcon></LogoIcon>
                </Link>
                <ThemeChanger></ThemeChanger>
                <SearchBar></SearchBar>
                <LanguageChanger></LanguageChanger>
                <ProductForm></ProductForm>
                <UserProfile></UserProfile>
                <CartDrawer></CartDrawer>
            </Flex>
            <DebugModal></DebugModal>
            <CheckoutForm></CheckoutForm>
        </section>
    );
};