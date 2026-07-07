import {kafkaConnector} from "./KafkaConnector";
import dotenv from "dotenv";
dotenv.config({ path: "messages/.env.indexer",override : false });

const GROUPID = process.env.GROUPID || "search-indexer";

export const kafkaConsumer = kafkaConnector.consumer({
    groupId: GROUPID
})