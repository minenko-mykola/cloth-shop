import axios from "axios";

export async function readOutbox()
{
    try
    {
        console.log(`[Schedule Service] Started reading outbox at ${new Date().toString()}`);
        const response = await axios.get("http://products-service:8004/read-outbox")
        console.log(`[Schedule Service] Ended reading outbox at ${new Date().toString()}`);
    }
    catch(err)
    {
        console.log(`[Schedule Service] Failed reading outbox at ${new Date().toString()}:${err}`);
    }
}