import {makeAutoObservable} from "mobx";

class headWearType
{
    type : string[] = []

    setType(value : string[])
    {
        this.type  = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const HeadWearType = new headWearType();