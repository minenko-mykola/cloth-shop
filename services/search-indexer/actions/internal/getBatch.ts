
export async function getBatch(limit : number,offset : string) : Promise<void>
{

    try
    {

    }
    catch(err)
    {
        console.log(`[Search Indexer] : Error while getting batch from MySQL:${err}`)
        throw err;
    }
}