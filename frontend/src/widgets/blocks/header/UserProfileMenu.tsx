"use client"
import React from 'react';
import {Avatar, Menu, Portal, Stack, Text} from "@chakra-ui/react";
import {UserProfileMenuControl, UserStore} from "@/widgets/blocks/shared/state-managers";
import {observer} from "mobx-react-lite";
import axios from "axios";

export const UserProfileMenu = observer(() => {

    const first_name = UserStore.user?.first_name || "";
    const last_name = UserStore.user?.first_name || "";

    return (
        <section>
            <Menu.Root positioning={{placement : "right-end" }}
                       onOpenChange={(isOpen) => { // Припускаємо, що Menu.Root передає новий стан
                           UserProfileMenuControl.setOpen(isOpen.open)
                       }}
                       onFocusOutside={() => {
                           UserProfileMenuControl.setOpen(false)
                       }}
                       open={UserProfileMenuControl.open}
            >
                <Menu.Trigger>
                    <Avatar.Root>
                        <Avatar.Fallback name={first_name.concat(last_name)} />
                        <Avatar.Image />
                    </Avatar.Root>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.ItemGroup>
                                <Menu.Item value="account">
                                    <Stack direction="row">
                                        <Avatar.Root size="lg">
                                            <Avatar.Fallback name={first_name.concat(last_name)} />
                                            <Avatar.Image />
                                        </Avatar.Root>
                                        <Stack direction="column">
                                            <Stack direction="row">
                                                <Text>{first_name}</Text>
                                                <Text>{last_name}</Text>
                                            </Stack>
                                            <Text alignSelf="center">{UserStore.user?.email}</Text>
                                        </Stack>
                                    </Stack>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.Separator />
                            <Menu.Item value="settings">Settings</Menu.Item>

                            <Menu.Item value="dashboard" onSelect={() => {
                                axios.get("http://localhost:5000/api/services/espo-crm").then((response) => {
                                    console.log(response);
                                }).catch((error) => {
                                    console.log(error);
                                })
                            }}>Dashboard</Menu.Item>
                            <Menu.Item value="logout" onSelect={() => {

                            }}
                            >Logout</Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </section>
    );
});