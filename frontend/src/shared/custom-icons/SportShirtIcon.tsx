import React from 'react';
import {IconImage} from "@/shared/custom-icons";
import dark from "@/shared/images/black/tshirt-black.png"
import white from "@/shared/images/white/tshirt-white.png"

export const SportShirtIcon = () => {
    return (
        <>
            <IconImage dark={dark.src} light={white.src} alt="AccessoriesCategory" ></IconImage>
        </>
    );
};
