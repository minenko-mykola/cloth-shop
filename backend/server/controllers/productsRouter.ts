import express from "express";
import {ProductInfo} from "../../entities/database/additional";
import {ClientProductType, ProductSubCategoriesType, SubCategoryTypes} from "../../entities/database/types/enum";
import {GlovesInfo, HeadWearsInfo} from "../../entities/database/models/categories/accessories";
import {upload} from "./multerConfig";

export const productRouter = express.Router();

async function getCategoryData(product: ProductInfo) : Promise<ProductSubCategoriesType>
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

productRouter.get("/get", async (req, res) => {
    try {
        const products : ProductInfo[] = await ProductInfo.findAll();
        const client_products : ClientProductType[] = []
        await Promise.all(
            products.map(async (product: ProductInfo) => {
                client_products.push({product_info : product, category_info : await getCategoryData(product) });
            })
        )
        res.send(client_products);

    } catch (error) {
        console.error('Error in getAllProducts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

productRouter.get("/get/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const product_info = await ProductInfo.findOne({where: {id: id}});

        if(!product_info)
        {
            res.status(404).json({ error: 'Product not found' });
        }
        else
        {
            const category_data = await getCategoryData(product_info);
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
});

productRouter.post("/create",upload.array(""), async (req, res) => {
    const dataToCreate = req.body;
    try {
        const product_info = await ProductInfo.create(dataToCreate);
        res.send(`Created a product with id ${product_info.id}`);
    }catch(error)
    {
        console.error(`Error in creating product:${ error }`)
        throw new Error(`Error in creating product:${ error }`);
    }
});

productRouter.put("/update/:id",upload.array(""), async (req, res) => {
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
});

productRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await ProductInfo.destroy({where: {id} });
        res.send(`Deleted a product with id ${id}`);
    }catch(error)
    {
        console.error(`Error in deleting product with id:${id}`, error);
        throw new Error(`Error in deleting product with id:${id}`);
    }
});

