import {ErrorModalTypes} from "@/shared/types";

class errorModalContent
{
    private _type : ErrorModalTypes = ErrorModalTypes.Error;
    private _message : string = "";

    get content(){
        return {type : this._type, message : this._message}
    }

    setContent(type : ErrorModalTypes = ErrorModalTypes.Error, message : string) : void
    {
        this._type = type;
        this._message = message;
    }

}

export const ErrorModalContent = new errorModalContent()