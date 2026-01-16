import {ErrorModalContent, ErrorModalHandler} from "@/widgets/blocks/shared/state-managers";
import {ErrorModalTypes} from "@/shared/types";

class DebugHandler
{
    throwInfo(message : string) : void
    {
        ErrorModalHandler.setOpen(true);
        ErrorModalContent.setContent(ErrorModalTypes.Info,message)
    }

    throwWarning(message : string) : void
    {
        ErrorModalHandler.setOpen(true);
        ErrorModalContent.setContent(ErrorModalTypes.Warning,message)
    }

    throwError(message : string) : void
    {
        ErrorModalHandler.setOpen(true);
        ErrorModalContent.setContent(ErrorModalTypes.Error,message)
    }
}

export const debugHandler = new DebugHandler();