import {UseFormReturn} from "react-hook-form";
import {FormInfoType} from "@/shared/types/forms";

export type HookTransferType<T extends FormInfoType> = UseFormReturn<T,any,T>
