import React, {useEffect, useState} from 'react';
import {Box, Code, FileUpload, Icon, Stack, useFileUpload} from "@chakra-ui/react";
import {LuUpload} from "react-icons/lu";
import {FileError} from "@zag-js/file-utils";
import {CreateProductHookStore} from "@/widgets/blocks/shared/state-managers/hooks";

export const AddPhotoForm = () => {

    const fileUpload = useFileUpload({
        maxFileSize: 5 * 1024 * 1024,
        maxFiles: 10,
        allowDrop: true,
        accept: ["image/png", "image/jpg", "image/jpeg"],
        validate: (file, details) => {
            const errors: FileError[] = [];

            // Перевіряємо, чи файл вже доданий (за назвою)
            const fileExists = fileUpload.acceptedFiles.some(
                f => f.name === file.name
            );

            if (fileExists) {
                errors.push("FILE_EXISTS"); // Дублікати відхиляємо
            }

            return errors; // Якщо масив порожній — файл валідний
        }
    });

    const accepted = fileUpload.acceptedFiles.map((file) => file.name)
    const rejected = fileUpload.rejectedFiles.map((e) => e.file.name)
    const hook = CreateProductHookStore.hook
    let urls : string[] = []

    useEffect(() => {
        urls = accepted
        hook!.setValue("photos",urls)
    },[accepted])

    return (
        <section>
            <Stack align="flex-start" direction="column">
                <Code colorPalette="green">accepted: {accepted.join(", ")}</Code>
                <Code colorPalette="red">rejected: {rejected.join(", ")}</Code>
                <FileUpload.RootProvider value={fileUpload}>
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone width="100%">
                        <Icon size="md" color="fg.muted">
                            <LuUpload />
                        </Icon>
                        <FileUpload.DropzoneContent>
                            <Box>Drag and drop files here</Box>
                            <Box color="fg.muted">.png, .jpg up to 5MB</Box>
                        </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                    <FileUpload.List showSize clearable />

                </FileUpload.RootProvider>

            </Stack>
        </section>
    );
};
