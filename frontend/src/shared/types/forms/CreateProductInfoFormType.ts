import {CreateProductSubFormType} from "@/shared/types/sub-forms";

export interface CreateProductInfoFormType {
    name : string;
    description : string;
    category : string[];
    info : CreateProductSubFormType;
    photos : string[];
}