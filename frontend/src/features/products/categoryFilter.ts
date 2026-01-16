import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";
import {ProductStore} from "@/widgets/blocks/shared/state-managers";
import {productFetcher} from "@/features/products/productFetcher.ts";

class CategoryFilter {

    async filterByCategory(categories : SubCategoryTypes[]) {
        const response = await productFetcher.getAllProducts()
        ProductStore.setProducts(ProductStore.products.filter(product => categories.includes(product.product_info?.category)))
    }
}

export const categoryFilter = new CategoryFilter();