import {makeAutoObservable} from "mobx";

class category
{
    category : string[] = [""];

    setCategory(value : string[])
    {
        this.category  = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const Category = new category();