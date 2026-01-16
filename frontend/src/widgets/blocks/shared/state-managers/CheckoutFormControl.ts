import {makeAutoObservable} from "mobx";

class checkoutFormControl
{
    private _isOpened : boolean = false;

    setIsOpened(isOpened : boolean) : void
    {
        this._isOpened = isOpened;
    }

    get isOpened() : boolean
    {
        return this._isOpened;
    }

    constructor()
    {
        makeAutoObservable(this)
    }
}

export const CheckoutFormControl = new checkoutFormControl();