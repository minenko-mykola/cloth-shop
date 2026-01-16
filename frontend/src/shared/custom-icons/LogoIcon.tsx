import React from 'react';
import dark from "@/shared/images/black/e-commerce-black.png"
import white from "@/shared/images/white/e-commerce-white.png"
import {useColorMode} from "@/shared/chakra-ui";
import {Image} from "@chakra-ui/react";

export const LogoIcon : React.FC = () => {
    const {colorMode} = useColorMode();
    const image_src = colorMode === 'light' ? dark.src : white.src;
    return (
        <>
            <Image src={image_src}></Image>
        </>
    );
};
