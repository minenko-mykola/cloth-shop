"use client";

import {Header} from "@/widgets/blocks/header";
import {LoadingPreview} from "@/widgets/blocks/shared";
import {Footer} from "@/widgets/blocks/footer";
import React, {useEffect, useState} from "react";
import {categoryFilter} from "@/features/products/categoryFilter.ts";
import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";
import {Flex} from "@chakra-ui/react";
import {ProductSection} from "@/widgets/blocks/products";

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        categoryFilter.filterByCategory([SubCategoryTypes.BlousesCategory])
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

