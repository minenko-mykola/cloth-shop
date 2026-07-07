"use client"
import React from 'react';
import {Avatar, Menu, Portal, Stack, Text} from "@chakra-ui/react";
import axios from "axios";
import {redirect} from "next/navigation";

export const UserProfileMenu = () => {

    return (
        <section>
            <Menu.Root positioning={{placement : "right-end" }}>
                <Menu.Trigger>
                    <Avatar.Root size="xl">
                        <Avatar.Fallback />
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
                                            <Avatar.Fallback />
                                            <Avatar.Image />
                                        </Avatar.Root>
                                        <Stack direction="column">
                                            <Stack direction="row">
                                                <Text></Text>
                                                <Text></Text>
                                            </Stack>
                                            <Text alignSelf="center"></Text>
                                        </Stack>
                                    </Stack>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.Separator />
                            <Menu.Item value="settings">Settings</Menu.Item>

                            <Menu.Item value="dashboard" onSelect={() => {
                                redirect("/crm")
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
};