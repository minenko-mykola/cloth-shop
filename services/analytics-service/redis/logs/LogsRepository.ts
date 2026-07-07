import {Repository} from "redis-om";
import {LogsSchema} from "./LogsSchema";
import {redisClient} from "./RedisClient";

export const logsRepository = new Repository(LogsSchema,redisClient as any)