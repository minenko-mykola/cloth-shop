import {Repository, Schema} from "redis-om";
import {redisConnector} from "../../../connectors/redis";

const productInfoSchema = new Schema("ProductInfo", {
    name : { type : 'string' },
    quantity : { type : 'number' }
},{
    dataStructure : "JSON"
})

export const productInfoRepository = new Repository(productInfoSchema,redisConnector);