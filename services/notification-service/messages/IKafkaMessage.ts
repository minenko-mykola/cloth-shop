import {Message} from "kafkajs";

export interface IKafkaMessage
{
    topic : string;
    message : Message;
}