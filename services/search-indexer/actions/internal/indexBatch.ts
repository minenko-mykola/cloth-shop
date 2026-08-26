import {esClient} from "../../connectors/esClient";

export async function indexBatch()
{

    try{

    }
    catch(err)
    {
        console.log("[Search Indexer] : Error while indexing product to ES:",err);
        throw err;
    }
}