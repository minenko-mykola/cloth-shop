import {createClient, RedisClientType} from 'redis'
import dotenv from "dotenv";
dotenv.config({ path : "envs/.env.redis",override : false })

const REDIS_URL = process.env.REDIS_URL || "redis://default:your_secure_password@redis:6379"
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "your_secure_password"
export const redisClient : RedisClientType = createClient({
    url: REDIS_URL,
    password : REDIS_PASSWORD
})
redisClient.on('error', (err) => console.log('Redis Client Error', err));
