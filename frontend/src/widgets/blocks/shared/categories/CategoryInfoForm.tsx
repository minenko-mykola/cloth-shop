"use client";
import {Category} from "../state-managers"
import {observer} from "mobx-react-lite";
import {
    BlousesInfoForm,
    GlovesInfoForm,
    HeadWearInfoForm,
    MenShirtsInfoForm, MenTShirtsInfoForm, WomenShirtsInfoForm, WomenTShirtsInfoForm
} from "@/widgets/blocks/shared/categories/sub-forms";
import {categories} from "@/shared/data/gloves";
import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";

export const CategoryInfoForm = observer(() => {

    return (
        <>{categories.items.map((category,index) => {
            if(Category.category[0] === category.value)
            {
                switch (category.keyAdapter)
                {
                    case SubCategoryTypes.GlovesCategory:
                        return (
                            <div key={index}>
                                <GlovesInfoForm></GlovesInfoForm>
                            </div>
                        )

                    case SubCategoryTypes.HeadWearCategory:
                        return (
                            <div key={index}>
                                <HeadWearInfoForm></HeadWearInfoForm>
                            </div>
                        )

                    case SubCategoryTypes.MenShirtCategory:
                        return (
                            <div key={index}>
                                <MenShirtsInfoForm></MenShirtsInfoForm>
                            </div>
                        )

                    case SubCategoryTypes.MenTShirtCategory:
                        return (
                            <div key={index}>
                                <MenTShirtsInfoForm></MenTShirtsInfoForm>
                            </div>
                        )

                    case SubCategoryTypes.WomenShirtCategory:
                        return (
                            <div key={index}>
                                <WomenShirtsInfoForm></WomenShirtsInfoForm>
                            </div>
                        )

                    case SubCategoryTypes.WomenTShirtCategory:
                        return (
                            <div key={index}>
                                <WomenTShirtsInfoForm></WomenTShirtsInfoForm>
                            </div>
                        )

                    case SubCategoryTypes.BlousesCategory:
                        return (
                            <div key={index}>
                                <BlousesInfoForm></BlousesInfoForm>
                            </div>
                        )

                    default:
                        return (
                            <div key={index}>Unsupported category</div>
                        )
                }
            }
        })}</>
    )
});