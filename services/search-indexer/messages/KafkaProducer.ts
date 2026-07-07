import {kafkaConnector} from "./KafkaConnector";
import {Producer} from "kafkajs";

export const kafkaProducer : Producer = kafkaConnector.producer();