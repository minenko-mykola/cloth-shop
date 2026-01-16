import {makeAutoObservable} from "mobx";
import {User} from "@/shared/generated/entities/database/additional";

class userStore
{
    private _user : User | undefined = undefined;

    setUser(user : User | undefined)
    {
        this._user = user;
    }

    get user(){
        return this._user;
    }

    constructor()
    {
        makeAutoObservable(this)
    }
}

export const UserStore = new userStore();