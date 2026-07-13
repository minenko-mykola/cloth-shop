import {kafkaConnector} from "./KafkaConnector";
import dotenv from "dotenv";
dotenv.config({ path : "envs/.env.products" , override : false });

const GROUP_ID = process.env.GROUP_ID || "products-service";

export const kafkaConsumer = kafkaConnector.consumer({
    groupId : GROUP_ID
})