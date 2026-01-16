import {HeadWearSex} from "@/shared/generated/entities/database/types/enum/headwear";

export const headwear_sex_adapter = (key : string) =>
{
    switch (key)
    {
        case "male":
            return HeadWearSex.Male.toString()

        case "female":
            return HeadWearSex.Female.toString()

        case "unisex":
            return HeadWearSex.Unisex.toString()

        default:
            console.warn(`${key} is unknown`)
    }
}