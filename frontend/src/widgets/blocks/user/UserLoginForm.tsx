"use client"
import React from 'react';
import {Button, CloseButton, Dialog, Field, Input, Portal, Stack} from "@chakra-ui/react";

import {PasswordInput} from "@/shared/chakra-ui/password-input.tsx";

export const UserLoginForm = () => {

    return (
        <section>
            <form id="user-login-form">
                <Dialog.Root
                    lazyMount>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Login</Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <section>
                                        <Field.Root required>
                                            <Field.Label>
                                                Login <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input placeholder="Login" variant="outline" />
                                            <Field.ErrorText>Enter login</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root required>
                                            <Stack width="100%" gap={3}>
                                                <Field.Label>Password</Field.Label>
                                                <PasswordInput
                                                    placeholder="Enter your password"
                                                />
                                            </Stack>
                                            <Field.ErrorText>Password strength must be high</Field.ErrorText>
                                        </Field.Root>
                                        <Stack>
                                            <Button variant="plain" onClick={() => {
                                            }} >No account?Register</Button>
                                        </Stack>
                                    </section>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline" type="reset">Cancel</Button>
                                    </Dialog.ActionTrigger>
                                    <Button type="submit" form="user-login-form">Save</Button>
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
};