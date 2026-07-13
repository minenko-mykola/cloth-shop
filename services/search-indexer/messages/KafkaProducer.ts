import {kafkaConnector} from "./KafkaConnector";
import {Producer} from "kafkajs";

export const kafkaProducer : Producer = kafkaConnector.producer({
    transactionalId : "search-indexer-tx",
    maxInFlightRequests : 1,
    idempotent : true
});