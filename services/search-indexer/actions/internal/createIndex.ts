import {esClient} from "../../connectors";

export async function createIndex()
{
    try
    {
        if(!await esClient.indices.exists({ index : "products" }))
        {
            await esClient.indices.create({
                index: "products",
                mappings: {
                    properties: {
                        id : { type : 'text' },
                        categoryId : { type : 'text' },
                        name : { type : 'text' },
                        description : { type : 'text' },
                        publishDate : { type : 'date' },
                        createdAt : { type : 'date' },
                        updatedAt : { type : 'date' },
                        variations : { type : 'nested',
                            properties : {
                                id : { type : 'text' },
                                modelId : { type : 'text' },
                                size : { type : 'text' },
                                price : { type : 'integer' },
                                quantity : { type : 'integer' },
                                createdAt : { type : 'date' },
                                updatedAt : { type : 'date' },
                            }
                        },
                        categories : { type : 'nested',
                            properties : {
                                id : { type : 'text' },
                                name : { type : 'text' },
                                createdAt : { type : 'date' },
                                updatedAt : { type : 'date' }
                            } },

                    }
                },
                settings: {
                    number_of_shards: 2,
                    number_of_replicas: 2
                }
            })
        }
    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while creating index:${err}`);
        throw err;
    }
}