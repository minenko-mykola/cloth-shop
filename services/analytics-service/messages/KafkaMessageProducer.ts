import {kafkaConnector} from "./KafkaMessageConnector";
import {Kafka, Producer} from "kafkajs";
import {IKafkaMessage} from "./IKafkaMessage";

class KafkaMessageProducer
{
    private kafka : Kafka = kafkaConnector;
    private producer : Producer = this.kafka.producer();

    async connect(): Promise<void> {

        try {
            await this.producer.connect()
        }
        catch (e)
        {
            await Promise.reject(`Failed to connect to Kafka: ${e}`);
        }
    }

    async disconnect(): Promise<void> {

        try
        {
            await this.producer.disconnect();
        }
        catch (e)
        {
            await Promise.reject(`Failed to disconnect from Kafka: ${e}`);
        }
    }

    async send(message: IKafkaMessage): Promise<void> {

        try
        {
            await this.producer.send({
                topic : message.topic,
                messages : [
                    message.message
                ]
            });
        }
        catch (e)
        {
            await Promise.reject(`Failed to send message using Kafka: ${e}`);
        }
    }

}

export const kafkaMessageProducer = new KafkaMessageProducer();