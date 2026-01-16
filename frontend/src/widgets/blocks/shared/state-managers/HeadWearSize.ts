import {makeAutoObservable} from "mobx";

class headWearSize
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

export const HeadWearSize = new headWearSize();