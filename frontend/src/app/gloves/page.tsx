"use client";

import React, {useEffect, useState} from "react";
import {Header} from "@/widgets/blocks/header";
import {LoadingPreview} from "@/widgets/blocks/shared";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/widgets/blocks/footer";
import {ProductSection} from "@/widgets/blocks/products";
import {categoryFilter} from "@/features/products/categoryFilter.ts";
import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        categoryFilter.filterByCategory(SubCategoryTypes.GlovesCategory)
        setLoaded(true);
    },[])

    if(!loaded){
        return <LoadingPreview />;
    }

    return (
        <>
            <Header />
            <Flex direction="row" height="100vh">
                <Flex width="20%" justify="center" bg="red.500">
                </Flex>
                <Flex width="80%" justify="center">
                    <ProductSection></ProductSection>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
}

