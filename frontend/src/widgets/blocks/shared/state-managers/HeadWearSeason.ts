import {makeAutoObservable} from "mobx";

class headWearSeason
{
    season : string[] = [];

    setSeason(value : string[])
    {
        this.season  = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const HeadWearSeason = new headWearSeason()