import {ProductInfo} from "../../entities/database/additional";
import {ClientProductType, ProductSubCategoriesType, SubCategoryTypes} from "../../entities/database/types/enum";
import {GlovesInfo, HeadWearsInfo} from "../../entities/database/models/categories/accessories";
import express from "express";

class ProductsActions
{
    async getAll(req: express.Request, res: express.Response) : Promise<void>
    {
        try {
            const products : ProductInfo[] = await ProductInfo.findAll();
            const client_products : ClientProductType[] = []
            await Promise.all(
                products.map(async (product: ProductInfo) => {
                    client_products.push(await this.createClientProduct(product));
                })
            )
            res.send(client_products);

        } catch (error) {
            console.error('Error in getAllProducts:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getByCategories(req: express.Request, res: express.Response)
    {
        const category = req.params.category;
        console.log(`Got categories:${category}`);
    }

    async getById(req: express.Request, res: express.Response)
    {
        const { id } = req.params;

        try {
            const product_info = await ProductInfo.findOne({where: {id: id}});

            if(!product_info)
            {
                res.status(404).json({ error: 'Product not found' });
            }
            else
            {
                const category_data = await this.getCategoryData(product_info);
                const client_product : ClientProductType = {
                    product_info : product_info,
                    category_info : category_data
                }
                res.send(client_product);
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async create(req: express.Request, res: express.Response)
    {
        const dataToCreate = req.body;
        try {
            const product_info = await ProductInfo.create(dataToCreate);
            res.send(`Created a product with id ${product_info.id}`);
        }catch(error)
        {
            console.error(`Error in creating product:${ error }`)
            throw new Error(`Error in creating product:${ error }`);
        }
    }

    async update(req: express.Request, res: express.Response)
    {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            await ProductInfo.update(updatedData,{where: {id} });
            res.send(`Updated a product with id ${id}`);
        }catch(error)
        {
            console.error(`Error in updating product with id:${id}`, error)
            throw new Error(`Error in updating product with id:${id}`);
        }
    }

    async delete(req: express.Request, res: express.Response)
    {
        const { id } = req.params;
        try {
            await ProductInfo.destroy({where: {id} });
            res.send(`Deleted a product with id ${id}`);
        }catch(error)
        {
            console.error(`Error in deleting product with id:${id}`, error);
            throw new Error(`Error in deleting product with id:${id}`);
        }
    }

    private async getCategoryData(product: ProductInfo) : Promise<ProductSubCategoriesType>
    {
        switch (product.category)
        {
            case SubCategoryTypes.GlovesCategory:
                return await GlovesInfo.findOne({where: {product_info_id: product.id}});

            case SubCategoryTypes.HeadWearCategory:
                return await HeadWearsInfo.findOne({where: {product_info_id: product.id}});

            default:
                return null;
        }
    }

    private async createClientProduct(product_info : ProductInfo)
    {
        const category_info = await this.getCategoryData(product_info);

        const client_product : ClientProductType = {
            product_info : product_info,
            category_info : category_info
        }

        return client_product;
    }
}

export const productsActions = new ProductsActions();