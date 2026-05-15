"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {ProductSection} from "@/widgets/blocks/products";
import {Footer} from "@/widgets/blocks/footer";
import {Header} from "@/widgets/blocks/header";

export default function Home () {
    const searchParams = useSearchParams();
    const query = searchParams.get('q'); // Отримуємо значення після ?q=

    useEffect(() => {

    }, [query]);

    return (
        <div>
            <Header></Header>
            <h1>Результати за запитом: {query}</h1>
            <ProductSection></ProductSection>
            <Footer></Footer>
        </div>
    );
}

