import {kafkaConnector} from "./KafkaConnector";
import {Producer} from "kafkajs";
import dotenv from "dotenv";

dotenv.config({ path: "envs/.env.indexer",override : false });
const TRANSACTIONAL_ID = process.env.TRANSACTIONAL_ID || "search-indexer-tx";

export const kafkaProducer : Producer = kafkaConnector.producer({
    transactionalId : TRANSACTIONAL_ID,
    maxInFlightRequests : 1,
    idempotent : true
});