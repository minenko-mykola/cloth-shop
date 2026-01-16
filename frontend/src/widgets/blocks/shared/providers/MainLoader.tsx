"use client";
import {useForm} from "react-hook-form";
import {
    CheckoutFormType,
    CreateProductInfoFormType,
    UserLoginFormType,
    UserRegisterFormType
} from "@/shared/types/forms";
import {
    CheckoutFormHook,
    CreateProductHookStore,
    UserLoginFormHook,
    UserRegisterFormHook
} from "@/widgets/blocks/shared/state-managers/hooks";
import {
    AuthenticationFormHandler
} from "@/widgets/blocks/shared/state-managers";
import {AuthenticationSwitcherType} from "@/shared/types";
import {observer} from "mobx-react-lite";

export const MainLoader =  observer(() => {

    AuthenticationFormHandler.setStatus(AuthenticationSwitcherType.Login)
    CreateProductHookStore.setHook(useForm<CreateProductInfoFormType>())
    UserLoginFormHook.setHook(useForm<UserLoginFormType>())
    UserRegisterFormHook.setHook(useForm<UserRegisterFormType>())
    CheckoutFormHook.setHook(useForm<CheckoutFormType>())

    return (
       <></>
    )
})

