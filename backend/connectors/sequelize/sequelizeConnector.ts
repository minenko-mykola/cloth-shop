import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import * as Models from "../../new_entities/models"

dotenv.config({ path: "config/envs/.env.mysql" , override : false });

export const sequelize = new Sequelize(process.env.DB_NAME || "reserve",
    process.env.DB_USERNAME || "reserve-username",
    process.env.DB_PASSWORD || "", {
    dialect: 'mysql',
    host: process.env.DB_HOST || "reserve",
    port : Number(process.env.DB_PORT) || 3306,
            models: Object.values(Models),
    logging: console.log,
});

//kitten
