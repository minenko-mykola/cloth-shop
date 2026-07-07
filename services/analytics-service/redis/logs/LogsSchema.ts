import { Schema } from "redis-om"

export const LogsSchema = new Schema('logs',{
    id : { type : 'string',indexed : true },
    operationId : { type : 'string',indexed : true },
    name : { type : 'string',indexed : true },
    status : { type : 'string',indexed : true },
    createdAt : { type : 'date',sortable : true }
},{
    dataStructure : "JSON"
})
