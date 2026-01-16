import {
    HeadWearSeasons, HeadWearSex,
    HeadWearSize,
    HeadWearType
} from "../../../../../backend/entities/database/types/enum/headwear";

export interface HeadWearInfoSubFormType {
    type : HeadWearType;
    size : HeadWearSize;
    price : number;
    season : HeadWearSeasons;
    sex : HeadWearSex;
    visor : boolean;
    ears_closed : boolean;
    size_adjuster : boolean;
    reflective_elements : boolean;
    ventilation_holes : boolean;
}