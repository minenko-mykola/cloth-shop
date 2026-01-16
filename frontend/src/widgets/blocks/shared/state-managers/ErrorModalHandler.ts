import {makeAutoObservable} from "mobx";

class errorModalHandler
{
    private _open : boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setOpen(open: boolean) {
        this._open = open;
    }

    get open () {
        return this._open;
    }

}

export const ErrorModalHandler = new errorModalHandler();