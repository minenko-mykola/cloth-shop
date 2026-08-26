import axios from "axios";

export async function updateProducts()
{
    try
    {
        console.log(`[Schedule Service] Started reading outbox at ${new Date().toString()}`);
        const response = await axios.get("http://search-indexer:8005/update-products")
        console.log(`[Schedule Service] Ended reading outbox at ${new Date().toString()}`);
    }
    catch(err)
    {
        console.log(`[Schedule Service] Failed reading outbox at ${new Date().toString()}:${err}`);
    }
}