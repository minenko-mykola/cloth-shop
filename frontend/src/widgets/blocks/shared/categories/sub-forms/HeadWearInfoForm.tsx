import React from 'react';
import {Checkbox, Field, Input, Stack} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {
    HeadWearSeasonsSelect,
    HeadWearSexSelect,
    HeadWearSizeSelect,
    HeadWearTypeSelect
} from "@/widgets/blocks/shared/selects/headwear";


export const HeadWearInfoForm = observer(() => {
    return (
        <section>
           <Stack direction="column">
                <HeadWearTypeSelect></HeadWearTypeSelect>
                <HeadWearSizeSelect></HeadWearSizeSelect>
               <Field.Root required>
                   <Field.Label>
                       Price <Field.RequiredIndicator />
                   </Field.Label>
                   <Input placeholder="Price:" />
               </Field.Root>
               <HeadWearSeasonsSelect></HeadWearSeasonsSelect>
               <HeadWearSexSelect></HeadWearSexSelect>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Visor</Checkbox.Label>
               </Checkbox.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Ears closed</Checkbox.Label>
               </Checkbox.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Size adjuster</Checkbox.Label>
               </Checkbox.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Reflective elements</Checkbox.Label>
               </Checkbox.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Ventilation holes</Checkbox.Label>
               </Checkbox.Root>
           </Stack>
        </section>
    );
});
