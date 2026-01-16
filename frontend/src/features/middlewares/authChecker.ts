import {UserStore} from "@/widgets/blocks/shared/state-managers";
import {makeAutoObservable} from "mobx";

class AuthChecker
{
    constructor()
    {
        makeAutoObservable(this);
    }

    get isAuthenticated(): boolean {
        if(UserStore.user)
        {
            return true;
        }else{
            return false;
        }
    }
}

export const authChecker = new AuthChecker();