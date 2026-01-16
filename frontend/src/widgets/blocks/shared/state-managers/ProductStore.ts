import {makeAutoObservable} from "mobx";
import {ClientProductType} from "@/shared/generated/entities/database/types/enum";

class productStore
{
    private _products : ClientProductType[] = []

    setProducts(products : ClientProductType[]) : void
    {
        this._products = products
    }

    get products()
    {
        return this._products;
    }

    constructor()
    {
        makeAutoObservable(this)
    }
}

export const ProductStore = new productStore();