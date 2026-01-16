"use client"
import React from 'react';
import {Avatar,IconButton} from "@chakra-ui/react";
import {UserFormControl, UserStore} from "@/widgets/blocks/shared/state-managers";
import {observer} from "mobx-react-lite";
import {UserAuthenticationForm, UserLoginForm} from "@/widgets/blocks/user";
import {UserProfileMenu} from "@/widgets/blocks/header/UserProfileMenu.tsx";

export const UserProfile = observer(() => {

    const first_name = UserStore.user?.first_name || "";
    const last_name = UserStore.user?.first_name || "";

    return (
        <section>
            {
                UserStore.user ? null : <IconButton variant="plain"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        UserFormControl.setOpen(true);
                                                    }}>
                    <Avatar.Root>
                        <Avatar.Fallback name={first_name.concat(last_name)} />
                        <Avatar.Image />
                    </Avatar.Root>
                </IconButton>
            }

            {
                UserStore.user ? <UserProfileMenu /> : <UserAuthenticationForm />
            }
        </section>
    );
});