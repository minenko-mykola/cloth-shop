import {kafkaConnector} from "./KafkaMessageConnector";
import {Admin, Kafka} from "kafkajs";

class KafkaTopicsManager
{
    private _kafka : Kafka = kafkaConnector;
    private _admin : Admin = this._kafka.admin();

    async createTopic(name : string,
                      numPartitions : number = 3,
                      replicationFactor : number = 3) : Promise<void>
    {
        try{
            await this._admin.createTopics({
                topics : [{ topic : name,
                    numPartitions : numPartitions,
                    replicationFactor : replicationFactor }],
                waitForLeaders : true
            })
        }
        catch(err)
        {
            await Promise.reject(`Failed to create topic: ${err}`);
        }
    }

    async deleteTopic(name: string): Promise<void>
    {
        try{
            await this._admin.deleteTopics({
                topics : [name]
            })
        }
        catch(err)
        {
            await Promise.reject(`Failed to delete topic: ${err}`);
        }
    }
}

export const kafkaTopicsManager = new KafkaTopicsManager();