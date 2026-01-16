import {makeAutoObservable} from "mobx";
import {SearchStateSwitcherType} from "@/shared/types";

class searchStateSwitcher
{
    private _state : SearchStateSwitcherType = SearchStateSwitcherType.Default;

    constructor() {
        makeAutoObservable(this);
    }

    get state() : SearchStateSwitcherType
    {
        return this._state;
    }

    setState(state : SearchStateSwitcherType)
    {
        this._state = state;
    }

}

export const SearchStateSwitcher = new searchStateSwitcher();