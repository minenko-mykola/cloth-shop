import {SubCategoryTypes} from "@/shared/generated/entities/database/types/enum";
import {productFetcher} from "@/features/products/productFetcher.ts";

class CategoryFilter {

    async filterByCategory(category : SubCategoryTypes) {
        const result = await productFetcher.getProductsByCategory(category)
    }
}

export const categoryFilter = new CategoryFilter();