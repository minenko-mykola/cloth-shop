import {esClient} from "../../connectors/esClient";
import {ProductModels} from "../../entities/sequelize";

export async function indexBatch(products : ProductModels[])
{
    const operations = products.flatMap((p : any) => [{ index: { _index: 'products', _id : p.id } }, p])

    try{

        if(operations.length !== 0)
        {
            const result = await esClient.bulk({
                refresh : true,
                operations
            })
        }
    }
    catch(err)
    {
        console.log("[Search Indexer] : Error while indexing product to ES:",err);
        throw err;
    }
}