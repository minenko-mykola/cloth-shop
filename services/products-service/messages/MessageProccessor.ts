import { EachBatchPayload} from "kafkajs";
import {kafkaProducer} from "./KafkaProducer";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path : "envs/.env.products" , override : false });
const GROUP_ID = process.env.GROUP_ID || "products-service";

export async function processBatch ({batch, resolveOffset, heartbeat, isRunning, isStale} : EachBatchPayload)
{
    if (!isRunning() || isStale()) return;

    const tx = await kafkaProducer.transaction()

    try{

        for (const message of batch.messages)
        {

            const parsedMessage = message.value?.toString('utf-8')
            const parsedKey = message.key?.toString('utf-8')

            console.log("Message:",parsedMessage);

            const getResponse = await axios.get(`http://analytics-service:8001/get-es-eos-log/${parsedKey}`)

            if(getResponse.data.key !== null)
            {
                console.log("Found a duplicate")

                resolveOffset(message.offset);
                continue;
            }

            const postResponse1 = await axios.post(`http://analytics-service:8001/create-es-eos-log`,{
                key : parsedKey
            })

            const postResponse2 = await axios.post(`http://products-service:8004/index`,{
                product : JSON.parse(parsedMessage!)
            })

            resolveOffset(message.offset)
            await heartbeat()
        }

        await tx.sendOffsets({
            consumerGroupId :GROUP_ID,
            topics : [{
                topic : batch.topic,
                partitions : [{
                    partition : batch.partition,
                    offset : (BigInt(batch.lastOffset()) + 1n).toString()
                }]
            }]
        })

        await tx.commit()
    }
    catch(err)
    {
        console.log(`Error:`,err)
        await tx.abort()
    }
}