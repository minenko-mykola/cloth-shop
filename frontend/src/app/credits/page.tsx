"use client";

import React, {useEffect, useState} from 'react';
import {LoadingPreview} from "@/widgets/blocks/shared";

const Page = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    },[])

    if(!loaded){
        return <LoadingPreview />;
    }

    return (
        <div>
            <a href="https://www.flaticon.com/free-icons/soccer" title="soccer icons">Soccer icons created by Freepik - Flaticon</a>
        </div>
    );
};

export default Page;