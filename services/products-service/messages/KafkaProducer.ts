import {kafkaConnector} from "./KafkaConnector";
import dotenv from "dotenv";
dotenv.config({path: "envs/.env.products", override : false});

const TRANSACTIONAL_ID = process.env.TRANSACTIONAL_ID || "products-service-tx";

export const kafkaProducer = kafkaConnector.producer({
    transactionalId : TRANSACTIONAL_ID
})