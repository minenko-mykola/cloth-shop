import React from 'react';
import {IconImage} from "@/shared/custom-icons";
import dark from "@/shared/images/black/footwear-black.png"
import white from "@/shared/images/white/footwear-white.png"

export const FootwearIcon = () => {
    return (
        <>
            <IconImage dark={dark.src} light={white.src} alt="Footwear" ></IconImage>
        </>
    );
};

