import React from 'react';
import {Flex, Link} from "@chakra-ui/react";
import {SatchelIcon} from "@/shared/custom-icons";
import {LeftMenu} from "@/widgets/blocks/header";

export const DownHeader = () => {
    return (
        <section>
            <Flex direction="row"
                  width="100%"  // Тепер це займе 100% від 20% ширини батьківського елементу
                  bg="blue.500"
                  align="center"
            >
                <LeftMenu></LeftMenu>
                <Link href="/blouses">
                    <SatchelIcon></SatchelIcon>
                    Blouses
                </Link>
                <Link href="/gloves">
                    <SatchelIcon></SatchelIcon>
                    Gloves
                </Link>
                <Link href="/tshirts">
                    <SatchelIcon></SatchelIcon>
                    TShirts
                </Link>
            </Flex>
        </section>
    );
};