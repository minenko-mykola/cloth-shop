import {ClientProductType} from "@/shared/generated/entities/database/types/enum";

class EsAdapter {

    private getCategoryData(product_info : any)
    {
        if(product_info?.gloves_info)
        {
            return product_info.gloves_info;
        }
        else if(product_info?.headwear_info)
        {
            return product_info.headwear_info;
        }
        else if(product_info?.blouses_info)
        {
            return product_info.blouses_info;
        }
        else if(product_info?.men_shirt_info)
        {
            return product_info.men_shirt_info;
        }
        else if(product_info?.men_tshirt_info)
        {
            return product_info.men_tshirt_info;
        }
        else if(product_info?.women_shirt_info)
        {
            return product_info.women_shirt_info;
        }
        else if(product_info?.women_tshirt_info)
        {
            return product_info.women_tshirt_info;
        }else{
            return null;
        }
    }

    convertToClientProduct(esProducts: any[]) : ClientProductType[]
    {
        const products: ClientProductType[] = [];
        esProducts.forEach(esProduct => {
            const product_data = esProduct.info;

            const category_data = this.getCategoryData(product_data);
            products.push({
                product_info: product_data,
                category_info: category_data,
            })
        })

        return products;
    }
}

export const esAdapter = new EsAdapter();