import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import {Cart, Photo, Product, ProductInfo, User} from "../../entities/database/additional";
import {GlovesInfo, HeadWearsInfo} from "../../entities/database/models/categories/accessories";
import {BlousesInfo, WomenShirtsInfo, WomenTShirtsInfo} from "../../entities/database/models/categories/women";
import {CartProduct} from "../../entities/database/additional";
import {MenShirtsInfo, MenTShirtsInfo} from "../../entities/database/models/categories/men";

dotenv.config({ path: "config/envs/.env.mysql" , override : false });

const sub_categories = [GlovesInfo,HeadWearsInfo,MenShirtsInfo,MenTShirtsInfo,BlousesInfo,
    WomenShirtsInfo,WomenTShirtsInfo]

const additional_models = [Product,ProductInfo,Cart,CartProduct,User,Photo];

const modelsArray = [...sub_categories,...additional_models];

export const reserve_sequelize = new Sequelize(process.env.RESERVE_DB_NAME || "reserve",
    process.env.RESERVE_DB_USERNAME || "reserve-username",
    process.env.RESERVE_DB_PASSWORD || "", {
        dialect: 'mysql',
        host: process.env.RESERVE_DB_HOST || "reserve",
        port : Number(process.env.RESERVE_DB_PORT) || 3306,
        models: modelsArray,
        logging: console.log,
    });
