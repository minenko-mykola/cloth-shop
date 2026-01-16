"use client"
import React, {useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, CloseButton, Dialog, Field, Input, Portal, Stack} from "@chakra-ui/react";
import {UserRegisterFormHook} from "@/widgets/blocks/shared/state-managers/hooks";
import {AuthenticationFormHandler, UserFormControl, UserStore} from "@/widgets/blocks/shared/state-managers";
import {strengthOptions} from "@/shared/data";
import { passwordStrength } from "check-password-strength"
import {PasswordInput, PasswordStrengthMeter} from "@/shared/chakra-ui/password-input.tsx";
import {AuthenticationSwitcherType} from "@/shared/types";
import axios from "axios";

export const UserRegisterForm = observer(() => {

    const hook = UserRegisterFormHook.hook!;
    const [password, setPassword] = useState<string>("");
    const {register,watch,trigger,handleSubmit,setValue} = hook;

    const strength = useMemo(() => {
        if(!password) return 0;
        const result = passwordStrength(password,strengthOptions);
        return result.id;
    },[password])

    const onSubmit = (data : any) => {
        axios.post("http://localhost:5000/api/user/register", data).then(res => {
            axios.get(`http://localhost:5000/api/user/get/${res.data.user_id}`).
            then(g_res => {
                UserStore.setUser(JSON.parse(JSON.stringify(g_res.data.user)));
                UserFormControl.setOpen(false);
            }).catch(g_err => console.log(g_err));
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    const validatePassword = (value : string): boolean =>
    {
        if (value && passwordStrength(value,strengthOptions).id >= 1)
        {
            return true;
        }else{
            return false;
        }
    }

    return (
        <section>
            <form id="user-register-form" onSubmit={handleSubmit(onSubmit)}>
                <Dialog.Root
                    lazyMount
                    open={UserFormControl.open}

                    onOpenChange={() => {
                        UserFormControl.setOpen(false);
                    }}>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Register</Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <section>
                                        <Stack direction="row" justify="space-between">
                                            <Field.Root required>
                                                <Field.Label>
                                                    First Name <Field.RequiredIndicator />
                                                </Field.Label>
                                                <Input placeholder="First name"
                                                       variant="outline"
                                                       {...register("first_name",{
                                                           required : true
                                                       })}></Input>
                                            </Field.Root>
                                            <Field.Root required>
                                                <Field.Label>
                                                    Last Name <Field.RequiredIndicator />
                                                </Field.Label>
                                                <Input placeholder="Last name"
                                                       variant="outline"
                                                       {...register("last_name",{
                                                           required : true
                                                       })}></Input>
                                            </Field.Root>
                                        </Stack>

                                        <Field.Root required>
                                            <Field.Label>
                                                Login <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input placeholder="Login"
                                                   variant="outline"
                                                   {...register("login")} />
                                        </Field.Root>

                                        <Field.Root required>
                                            <Stack width="100%" gap={3}>
                                                <Field.Label>Password</Field.Label>
                                                <PasswordInput {...register("password",{
                                                    required : true,
                                                    validate : validatePassword
                                                })}
                                                               value={password}
                                                               onChange={(e) =>
                                                                   setPassword(e.currentTarget.value)}
                                                               placeholder="Enter your password"
                                                />
                                                <PasswordStrengthMeter value={strength} />
                                            </Stack>
                                            <Field.ErrorText>Password strength must be high</Field.ErrorText>
                                        </Field.Root>
                                        <Stack>
                                            <Button variant="plain" onClick={() => {
                                                AuthenticationFormHandler.setStatus(AuthenticationSwitcherType.Login);
                                            }}>Already have account?Login</Button>
                                        </Stack>
                                    </section>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline" type="reset">Cancel</Button>
                                    </Dialog.ActionTrigger>
                                    <Button type="submit" form="user-register-form">Save</Button>
                                </Dialog.Footer>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </form>
        </section>
    );
});