import {ObjectId} from "bson";
import {ILogDto, Log} from "../../entities/mongoose";

export async function updateLog(log : ILogDto)
{
    if(!ObjectId.isValid(log.id))
    {
        console.log(`[Search Indexer] : Invalid ID:${log.id}`)
        return null;
    }

    try
    {
        const result = await Log.findByIdAndUpdate(log.id,log)

        if(!result)
        {
            return null;
        }
        else{
            await result.save();
            return result;
        }
    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while updating log:${err}`)
        throw err;
    }
}