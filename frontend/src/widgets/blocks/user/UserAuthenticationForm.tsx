import React from 'react';
import {AuthenticationFormHandler} from "@/widgets/blocks/shared/state-managers";
import {AuthenticationSwitcherType} from "@/shared/types";
import {UserLoginForm} from "@/widgets/blocks/user/UserLoginForm.tsx";
import {UserRegisterForm} from "@/widgets/blocks/user/UserRegisterForm.tsx";
import {observer} from "mobx-react-lite";

export const UserAuthenticationForm = observer(() => {
    return (
        <section>
            {
                AuthenticationFormHandler.status == AuthenticationSwitcherType.Login ?
                    <UserLoginForm></UserLoginForm> : <UserRegisterForm></UserRegisterForm>
            }
        </section>
    );
});
