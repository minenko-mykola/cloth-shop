import {GlovesSize} from "../../../../../backend/entities/database/types/enum";

export interface GlovesInfoSubFormType
{
    size : GlovesSize;
    water_protection : boolean;
    wind_protection : boolean;
    price : number;
}