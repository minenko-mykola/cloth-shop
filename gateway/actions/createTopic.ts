import {ITopicConfig} from "kafkajs";
import {kafkaAdmin} from "../messages";

export async function createTopic(topic : ITopicConfig)
{
    try
    {
        await kafkaAdmin.createTopics({
            topics : [{
                topic: topic.topic,
                numPartitions : topic.numPartitions,
                replicationFactor : topic.replicationFactor
            }]
        })

        console.log(`[Gateway] : Topic with name ${topic.topic} was created successfully.`)
    }
    catch(err)
    {
        console.log(`[Gateway] : Failed to create topic with name ${topic.topic}:${err}`)
        throw err;
    }
}