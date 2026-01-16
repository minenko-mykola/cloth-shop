import {HeadWearSeasons} from "@/shared/generated/entities/database/types/enum/headwear";

export const headwear_season_adapter= (key : string) =>
{
    switch (key)
    {
        case "summer":
            return HeadWearSeasons.Summer.toString();

        case "demiseasonal":
            return HeadWearSeasons.DemiSeasonal.toString();

        case "autumn":
            return HeadWearSeasons.Autumn.toString();

        case "spring":
            return HeadWearSeasons.Spring.toString();

        case "winter":
            return HeadWearSeasons.Winter.toString();

        default:
            break;
    }
}