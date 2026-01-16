import {makeAutoObservable} from "mobx";

class country {

    country : string[] = ["US"];

    setCountry (country: string[])
    {
        this.country  = country;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const Country = new country();