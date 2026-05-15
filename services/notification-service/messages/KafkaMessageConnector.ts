import {Kafka} from 'kafkajs'

export const kafkaConnector : Kafka = new Kafka({
    clientId: 'cloth-shop',
    brokers: ['kafka1:9092','kafka2:9092','kafka3:9092']
})