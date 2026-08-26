import {ObjectId} from "bson";

export async function getStatus(id : string) : Promise<void>
{
    try
    {

    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while getting status:${err}`)
        throw err;
    }
}