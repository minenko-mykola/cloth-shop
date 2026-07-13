import {kafkaConnector} from "./KafkaConnector";

export const kafkaProducer = kafkaConnector.producer({
    transactionalId : "products-service-tx"
})