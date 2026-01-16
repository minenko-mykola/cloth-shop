import {makeAutoObservable} from "mobx";

class headWearSex
{
    sex : string[] = [];

    setSex(value : string[])
    {
        this.sex  = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const HeadWearSex = new headWearSex()