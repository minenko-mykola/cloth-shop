import React from 'react';
import {IconImageType} from "@/shared/custom-icons";
import {useColorMode} from "@/shared/chakra-ui";
import {Image} from "@chakra-ui/react";

export const IconImage = (props : IconImageType) => {
    const {dark,light,alt} = props;
    const {colorMode} = useColorMode();
    const image_src = colorMode === 'light' ? dark : light;
    return (
        <>
            <Image src={image_src} alt={alt} pl="6px" pr="6px"></Image>
        </>
    );
};