import {Schema} from "redis-om";

export const SessionSchema = new Schema("sessions",{
    id : { type : 'string',indexed : true },
    userId : { type : 'string',indexed : true },
    accessToken : { type : 'string',indexed : true },
    refreshToken : { type : 'string',indexed : true }
},{
    dataStructure : 'JSON'
})