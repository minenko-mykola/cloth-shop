import {kafkaConnector} from "./KafkaConnector";
import dotenv from "dotenv";
dotenv.config({ path: "messages/.env.indexer",override : false });

const GROUP_ID = process.env.GROUP_ID || "search-indexer";

export const kafkaConsumer = kafkaConnector.consumer({
    groupId: GROUP_ID
})