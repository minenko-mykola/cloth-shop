"use client";

import React, {useEffect, useState} from "react";
import {Flex, useDrawer} from "@chakra-ui/react";
import {Header} from "@/widgets/blocks/header";
import {LoadingPreview} from "@/widgets/blocks/shared";
import {Footer, PaginationSection} from "@/widgets/blocks/footer";
import {ProductSection} from "@/widgets/blocks/products";

export default function Home() {
    const [hasLoaded, setHasLoaded] = useState(false);

    useDrawer()

    useEffect(() => {

       setHasLoaded(true)
    }, []);

    if (!hasLoaded) {
        return <LoadingPreview />;
    }

    return (
        <>
            <Flex direction="column" width="100%" height="100vh">
                <Header />
                <section>
                    <Flex direction="row" height="100vh">
                        <Flex width="100%" justify="space-between" bg="yellow.500" flexWrap="wrap">
                            <ProductSection></ProductSection>
                        </Flex>
                    </Flex>
                </section>
                <Flex width="100%" height="min-content" bg="green" justify="center" alignSelf="flex-end" mb="2%">
                    <PaginationSection></PaginationSection>
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}

