import {Client} from "@elastic/elasticsearch";

export const esClient = new Client({
    node : "http://elasticsearch:9200",
})