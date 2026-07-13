import {Schema} from "redis-om";

export const EsEosSchema = new Schema("es-eos",{
    id : { type : 'string',indexed : true },
    key : { type : 'string',indexed : true }
},{
    dataStructure : "JSON"
})