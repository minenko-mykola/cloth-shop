import {CartProducts} from "@/widgets/blocks/shared/state-managers";
import axios from "axios";
import {debugHandler} from "@/features/shared";

class CartController
{
    async checkout()
    {
        try
        {
            await Promise.all(
                CartProducts.products.map(async (product) => {
                    const result = await axios.get(`http://localhost:5000/api/redis/get-quantity/${product.product_info?.id}`)

                    if(product.product_info?.quantity > result.data.quantity)
                    {
                        throw new Error(`Product quantity is not enough for your purchase`)
                    }
                })
            )


        }
        catch(err)
        {
            debugHandler.throwError(`Error while checkout: ${err}`);
        }
    }
}

export const cartController = new CartController();