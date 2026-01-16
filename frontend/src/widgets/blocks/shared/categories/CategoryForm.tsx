"use client";
import React from 'react';
import {CategorySelect} from "@/widgets/blocks/shared/selects";
import {CategoryInfoForm} from "@/widgets/blocks/shared/categories";

export const CategoryForm = () => {
    return (
        <div>
            <CategorySelect></CategorySelect>
            <CategoryInfoForm></CategoryInfoForm>
        </div>
    );
};
