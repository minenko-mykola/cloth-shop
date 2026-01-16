import {makeAutoObservable} from "mobx";

class userProfileMenuControl
{
    private _open : boolean = false;

    constructor()
    {
        makeAutoObservable(this)
    }

    setOpen(open: boolean)
    {
        this._open = open;
    }

    get open()
    {
        return this._open;
    }
}

export const UserProfileMenuControl = new userProfileMenuControl();