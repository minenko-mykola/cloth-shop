"use client";

import { Provider } from "@/shared/chakra-ui/index.ts"
import React from "react";
import {MainLoader} from "@/widgets/blocks/shared/providers";

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <html suppressHydrationWarning>
            <title>React + Next.js</title>
            <body>
                <Provider>
                    <MainLoader></MainLoader>
                    {children}
                </Provider>
            </body>
        </html>
    )
}