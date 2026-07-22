import {Categories, ProductModels, ProductVariations} from "../../entities/sequelize";
import {Op} from "sequelize";

export async function getBatch(limit : number,offset : string) : Promise<ProductModels[]>
{

    try
    {
        const batch = await ProductModels.findAll({
            include : [{
                model : ProductVariations
            },{
                model : Categories
            }],
            limit: limit,
            where : {
                id  : {
                    [Op.gt] : offset
                }
            }
        })
        return batch
    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while getting batch from MySQL:${err}`)
        throw err;
    }
}