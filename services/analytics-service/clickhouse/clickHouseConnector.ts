import {ClickhouseOrm} from "clickhouse-orm";
import dotenv from "dotenv";
dotenv.config( { path: "envs/.env.scheduler", override : false } );

const DB_NAME = process.env.CH_DB_NAME || "clickhouse_db";
const DB_CLUSTER = process.env.CH_DB_CLUSTER || "c2sh2rep";
const DB_HOST = process.env.CH_DB_HOST || "haproxy";
const DB_PORT = Number(process.env.CH_DB_PORT) || 8123;
const DB_USERNAME = process.env.CH_DB_USERNAME || "";
const DB_PASSWORD = process.env.CH_DB_PASSWORD || "";

export const clickHouseConnector = ClickhouseOrm({
    db: {
        name: DB_NAME,
        cluster :DB_CLUSTER,
    },
    debug: true,
    client: {
        url: `http://${DB_HOST}`,
        port: DB_PORT,
        basicAuth: {
            username: DB_USERNAME,
            password: DB_PASSWORD,
        },
        debug: true,
        isUseGzip: true,
        format: "json", // "json" || "csv" || "tsv"
    },
});