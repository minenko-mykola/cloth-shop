import {Repository} from "redis-om";
import {redisClient} from "../logs";
import {EsEosSchema} from "./EsEosSchema";

export const esEosRepository = new Repository(EsEosSchema,redisClient as any)