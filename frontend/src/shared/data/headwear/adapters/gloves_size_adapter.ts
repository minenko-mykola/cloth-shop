import {GlovesSize} from "@/shared/generated/entities/database/types/enum";

export const gloves_size_adapter = (key : string) =>
{
    switch(key)
    {
        case "xs":
            return GlovesSize.XS.toString()

        case "s":
            return GlovesSize.S.toString()

        case "m":
            return GlovesSize.M.toString()

        case "l":
            return GlovesSize.L.toString()

        case "xl":
            return GlovesSize.XL.toString()

        default:
            console.warn("Gloves size not supported");
    }
}