import {Kafka} from "kafkajs";

export const kafkaConnector = new Kafka({
    clientId : "cloth-shop",
    brokers : ["kafka1:9092","kafka2:9092","kafka3:9092"],
    retry : {
        initialRetryTime : 3000,
        retries : 10
    }
})