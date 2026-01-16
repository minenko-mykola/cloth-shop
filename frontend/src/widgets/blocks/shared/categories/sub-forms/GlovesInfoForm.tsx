import React, {useEffect, useState} from 'react';
import {Checkbox, Field, NumberInput, Stack} from "@chakra-ui/react";
import {GlovesSizeSelect} from "@/widgets/blocks/shared/selects/gloves";
import {observer} from "mobx-react-lite";
import {CreateProductHookStore} from "@/widgets/blocks/shared/state-managers/hooks";

export const GlovesInfoForm = observer(() => {

    const hook = CreateProductHookStore.hook;
    const {
        register,
        watch,
        trigger
    } = hook!;

    const isSubmitted = CreateProductHookStore.isSubmitted;

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
                       <NumberInput.Input {...register("info.price",{
                           required : true,
                           min : 0.99
                       })} />
                   </NumberInput.Root>
                   <Field.HelperText>The price must be greater than 0.99</Field.HelperText>
               </Field.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput {...register("info.water_protection")} />
                   <Checkbox.Control />
                   <Checkbox.Label>Water protection</Checkbox.Label>
               </Checkbox.Root>
               <Checkbox.Root variant="outline">
                   <Checkbox.HiddenInput {...hook!.register("info.wind_protection")} />
                   <Checkbox.Control />
                   <Checkbox.Label>Wind protection</Checkbox.Label>
               </Checkbox.Root>
           </Stack>
        </section>
    );
});
