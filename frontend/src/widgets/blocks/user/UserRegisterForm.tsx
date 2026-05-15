"use client"
import React from 'react';
import {Button, CloseButton, Dialog, Field, Input, Portal, Stack} from "@chakra-ui/react";
import {PasswordInput} from "@/shared/chakra-ui/password-input";

export const UserRegisterForm = () => {

    return (
        <section>
            <form id="user-register-form">
                <Dialog.Root
                    lazyMount>
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
                                                       variant="outline"></Input>
                                            </Field.Root>
                                            <Field.Root required>
                                                <Field.Label>
                                                    Last Name <Field.RequiredIndicator />
                                                </Field.Label>
                                                <Input placeholder="Last name"
                                                       variant="outline"></Input>
                                            </Field.Root>
                                        </Stack>

                                        <Field.Root required>
                                            <Field.Label>
                                                Login <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input placeholder="Login"
                                                   variant="outline">
                                            </Input>
                                        </Field.Root>

                                        <Field.Root required>
                                            <Stack width="100%" gap={3}>
                                                <Field.Label>Password</Field.Label>
                                                <PasswordInput></PasswordInput>
                                            </Stack>
                                            <Field.ErrorText>Password strength must be high</Field.ErrorText>
                                        </Field.Root>
                                        <Stack>
                                            <Button variant="plain" onClick={() => {
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
};