import axios from "axios";
import {ProductStore} from "@/widgets/blocks/shared/state-managers";
import {esAdapter} from "@/shared/elastic-search";
import {debugHandler} from "@/features/shared";

class ProductFetcher
{
    async getProductBySearch(query : string | null)
    {
        if (query) {
            try
            {
                const response = await axios.get("http://localhost:5000/api/search", {
                    params: { q: query } // Axios автоматично перетворить це на ?q=значення
                })
                const clientProducts = esAdapter.convertToClientProduct(response.data.result);
                ProductStore.setProducts(clientProducts);
                console.log(`[Product Fetcher] Ended fetching products for \"${query}\"`);
            }
            catch(err)
            {
                console.error(`[Product Fetcher] Error while getting products by search:${err}`)
                debugHandler.throwError(`[Product Fetcher] Error while getting products by search:${err}`)
            }
        }
    }

    async getAllProducts()
    {
        try {
            const result = await axios.get("http://localhost:5000/api/products/get");
            ProductStore.setProducts(result.data);
            console.log(`[Product Fetcher] Ended fetching all products`)
        }catch(err)
        {
            console.error(`[Product Fetcher] Error while getting all products:${err}`)
            debugHandler.throwError(`[Product Fetcher] Error while getting all products:${err}`)
        }
    }
}

export const productFetcher = new ProductFetcher();