"use client";

import React, {useEffect, useState} from "react";
import {Flex} from "@chakra-ui/react";
import {Header} from "@/widgets/blocks/header";
import {LoadingPreview} from "@/widgets/blocks/shared";
import {Footer} from "@/widgets/blocks/footer";
import {useParams} from "next/navigation";
import axios from "axios";

export default function Home() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/get/${id}`).then(res => {
            console.log(res.data);
        })
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
                    <Flex justify="center" width="100%" height="100vh" align="center" bg="yellow.500">

                    </Flex>
                </section>
                <Footer />
            </Flex>
        </>
    );
}

