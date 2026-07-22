import {ILog, Log} from "../../entities/mongoose";

export async function writeLog(log : ILog)
{
    try
    {
        const result = await Log.create({
            operationId : log.operationId,
            name : log.name,
            status : log.status
        })

        return result
    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error writing log to MongoDB:${err}`);
        throw err;
    }
}