import React from 'react';
import {IconImage} from "@/shared/custom-icons";
import dark from "@/shared/images/black/satchel-black.png"
import white from "@/shared/images/white/satchel-white.png"

export const SatchelIcon = () => {
    return (
        <>
            <IconImage dark={dark.src} light={white.src} alt="Accessories category" ></IconImage>
        </>
    );
};
