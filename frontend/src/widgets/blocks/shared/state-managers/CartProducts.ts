import {ClientProductType} from "@/shared/generated/entities/database/types/enum";
import {makeAutoObservable} from "mobx";

class cartProducts
{
    private _products : ClientProductType[] = []

    constructor()
    {
        makeAutoObservable(this);
    }

    addProduct(_product: ClientProductType)
    {

        if(!this.isAdded(_product))
        {
            this._products.push(_product);
        }else{

        }
    }

    removeProduct(_product: ClientProductType)
    {
        this._products = this._products.filter(product => product.product_info.id !== _product.product_info.id);
    }

    updateQuantity(_product: ClientProductType,_quantity : number)
    {

    }

    isAdded(_product: ClientProductType) : boolean
    {
        const candidate = this._products.find(product => product.product_info.id === _product.product_info.id);

        const result = candidate ? true : false;

        return result;
    }

    get products() {
        return this._products;
    }
}

export const CartProducts = new cartProducts();