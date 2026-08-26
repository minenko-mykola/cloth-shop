import {Log, LogStatus} from "../../entities/mongoose/logs";
import {ObjectId} from "bson";

export async function getStatus(id : string) : Promise<LogStatus | null>
{
    try
    {
        if(!ObjectId.isValid(id))
        {
            console.log(`[Search Indexer] : Invalid ID:${id}`)
            return null;
        }

        const result = await Log.findById(id)

        if(result)
        {
            return result.status;
        }
        else
        {
            return null;
        }
    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while getting status:${err}`)
        throw err;
    }
}