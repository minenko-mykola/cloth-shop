import {makeAutoObservable} from "mobx";

class userFormControl
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

export const UserFormControl = new userFormControl();