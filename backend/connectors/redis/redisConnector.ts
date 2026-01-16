import { createClient } from 'redis';
import dotenv from "dotenv";

dotenv.config({ path: "config/envs/.env.redis",override : false });

const redis_user = process.env.REDIS_USER || "redis-default-user";
const redis_password = process.env.REDIS_PASSWORD || "redis-default-password";
const redis_host = process.env.REDIS_HOST || "redis-default-host";
const redis_port = Number(process.env.REDIS_PORT) || 1234;

const redis_url = `redis://${redis_user}:${redis_password}@${redis_host}:${redis_port}`;

export const redisConnector = createClient({
    url: redis_url
});

redisConnector.on('error', (err) => {
    console.error(`[Redis] Error: ${err}]`);
})

redisConnector.on('reconnecting', () => {
    console.log(`[Redis] Redis is reconnecting`);
});