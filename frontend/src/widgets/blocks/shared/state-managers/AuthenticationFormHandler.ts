import {makeAutoObservable} from "mobx";
import {AuthenticationSwitcherType} from "@/shared/types";

class authenticationFormHandler
{
    constructor() {
        makeAutoObservable(this)
    }

    private _status : AuthenticationSwitcherType = AuthenticationSwitcherType.Login;

    setStatus(status : AuthenticationSwitcherType){
        this._status = status;
    }

    get status(){
        return this._status;
    }
}

export const AuthenticationFormHandler = new authenticationFormHandler();