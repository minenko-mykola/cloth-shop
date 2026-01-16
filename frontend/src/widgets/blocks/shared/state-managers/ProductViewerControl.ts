import {makeAutoObservable} from "mobx";
import {ClientProductType} from "@/shared/generated/entities/database/types/enum";

class productViewer
{
    private _product : ClientProductType | undefined;

    constructor()
    {
        makeAutoObservable(this)
    }

    setProduct(product : ClientProductType) : void
    {
        this._product = product;
    }

    get product()
    {
        return this._product;
    }
}

export const ProductViewerControl = new productViewer();