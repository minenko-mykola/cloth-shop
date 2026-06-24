import {kafkaConnector} from "./KafkaMessageConnector";
import {Consumer, EachMessagePayload, Kafka} from "kafkajs";
import dotenv from "dotenv";

dotenv.config({ path : "envs/.env.analytics" , override : false });

class KafkaMessageConsumer
{

    private _kafka : Kafka = kafkaConnector;
    private GROUP_ID = process.env.GROUP_ID || "default-analytics-group";
    private _consumer : Consumer = this._kafka.consumer({
        groupId : this.GROUP_ID
    });

    async startReading(): Promise<any>
    {
        try
        {
            await this._consumer.run({
                eachMessage : async ({topic, partition, message} : EachMessagePayload) =>
                {
                    console.log(topic, partition, message);
                }
            })
        }
        catch(err)
        {
            await Promise.reject(`Failed to read messages: ${err}`);
        }
    }

    async subscribe(topics : string[]): Promise<void> {

        try
        {
            await this._consumer.subscribe({
                topics : topics,
                fromBeginning : true
            })
        }
        catch(err)
        {
            await Promise.reject(`Failed to subscribe messages: ${err}`);
        }
    }
}

export const kafkaMessageConsumer = new KafkaMessageConsumer()