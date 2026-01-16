import {makeAutoObservable} from "mobx";

class glovesSize
{
    size : string[] = [];

    setSize(value : string[])
    {
        this.size  = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const GlovesSize = new glovesSize();