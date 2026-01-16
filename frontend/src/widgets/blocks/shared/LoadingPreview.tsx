import React from 'react';
import {Flex, ProgressCircle,Text} from "@chakra-ui/react";

export const LoadingPreview = () => {
    return (
        <section>
            <Flex w="100%" h="100vh" direction="column" justify="center" align="center">
                <Text textStyle="4xl" mb="20px">Loading page</Text>
                <ProgressCircle.Root size="xl" value={null}>
                    <ProgressCircle.Circle>
                        <ProgressCircle.Track />
                        <ProgressCircle.Range />
                    </ProgressCircle.Circle>
                    <ProgressCircle.ValueText />
                </ProgressCircle.Root>
            </Flex>
        </section>
    );
};

