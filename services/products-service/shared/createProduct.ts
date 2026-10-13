import {Products} from "../entities/mongoose/products";

export async function createProduct()
{
    try
    {
        const product = await Products.create({
            name : "Product 1",
            description : "Description 1",
            price : 1.99,
            quantity : 20,
            owner : "6ace3059c5897256252718e7",
            discounts : ["6ace6922f1a79eb7be5d0a43","6ace6debf545497970c53f8b"]
        });
    }
    catch(err)
    {
        console.log(`Error while creating product:${err}`);
        throw err
    }
}