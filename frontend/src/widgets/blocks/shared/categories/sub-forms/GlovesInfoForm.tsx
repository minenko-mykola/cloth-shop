import React, {useState} from 'react';
import {Checkbox, Field, NumberInput, Stack} from "@chakra-ui/react";
import {GlovesSizeSelect} from "@/widgets/blocks/shared/selects/gloves";

export const GlovesInfoForm = () => {

    const [value, setValue] = useState<string>("0");

    return (
        <section>
           <Stack direction="column">
                <GlovesSizeSelect></GlovesSizeSelect>
               <Field.Root required>
                   <Field.Label>
                       Price<Field.RequiredIndicator />
                   </Field.Label>
                   <NumberInput.Root width="200px" required
                                     allowMouseWheel
                                     spinOnPress
                                     value={value}
                                     onValueChange={(e) => {
                                         if(e.valueAsNumber > 0.99)
                                         {
                                             setValue(e.value)
                                         }else
                                         {
                                             setValue("0")
                                         }
                                     }}
                   >
                       <NumberInput.Control />
                       <NumberInput.Input />
                   </NumberInput.Root>
                   <Field.HelperText>The price must be greater than 0.99</Field.HelperText>
               </Field.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Water protection</Checkbox.Label>
               </Checkbox.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput />
                   <Checkbox.Control />
                   <Checkbox.Label>Wind protection</Checkbox.Label>
               </Checkbox.Root>
           </Stack>
        </section>
    );
};
