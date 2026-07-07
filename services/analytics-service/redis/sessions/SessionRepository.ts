import {Repository} from "redis-om";
import {SessionSchema} from "./SessionSchema";
import {redisClient} from "../logs";

export const sessionRepository = new Repository(SessionSchema,redisClient as any)