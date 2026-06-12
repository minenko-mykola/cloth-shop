"use client";

import React from "react";
import {Provider as ChakraProvider} from "@/shared/chakra-ui/provider.tsx";
import {Provider} from "react-redux";
import {setupStore} from "@/shared/redux/types";

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props
    const store = setupStore();

    return (
        <Provider store={store}>
            <html suppressHydrationWarning>
            <title>Cloth-Shop</title>
            <body>
            <ChakraProvider>
                {children}
            </ChakraProvider>
            </body>
            </html>
        </Provider>
    )
}