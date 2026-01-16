import {makeAutoObservable} from "mobx";
import {ClientProductType} from "@/shared/generated/entities/database/types/enum";

class CartTotalPrice {
    private _total : number = 0;

    constructor()
    {
        makeAutoObservable(this);
    }

   addProduct(_product: ClientProductType,_quantity: number = 1)
   {
        this._total += _product.category_info!.price * _quantity;
   }

   removeProduct(_product: ClientProductType,_quantity: number)
   {
       this._total -= _product.category_info!.price * _quantity;
   }

   updateQuantity(_product: ClientProductType,_newQuantity: number,_oldQuantity: number)
   {
       this.addProduct(_product,(_newQuantity - _oldQuantity));
   }

    get total () {
        return this._total;
    }
}

export const cartTotalPrice = new CartTotalPrice();