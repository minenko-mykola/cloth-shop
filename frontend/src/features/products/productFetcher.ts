import axios from "axios";
import {ProductStore} from "@/widgets/blocks/shared/state-managers";
import {esAdapter} from "@/shared/elastic-search";
import {debugHandler} from "@/features/shared";
import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";

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

    async getProductsByCategory(category : SubCategoryTypes)
    {
        try {
            console.log(`Got category: ${category}`);
            const result = await axios.get(`http://localhost:5000/api/products/get-category/${category}`);
            console.log(`[Product Fetcher] Got products:${result.data.products}`);
            ProductStore.setProducts(result.data.products);
            console.log(`[Product Fetcher] Ended fetching all products by category:${category}`);
        }catch(err)
        {
            console.error(`[Product Fetcher] Error while getting all products:${err}`)
            debugHandler.throwError(`[Product Fetcher] Error while getting all products:${err}`)
        }
    }
}

export const productFetcher = new ProductFetcher();