"use client";

import React from "react";
import {Provider as ChakraProvider} from "@/shared/chakra-ui/provider.tsx";

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <>
            <html suppressHydrationWarning>
            <title>React + Next.js</title>
            <body>
            <ChakraProvider>
                {children}
            </ChakraProvider>
            </body>
            </html>
        </>
    )
}