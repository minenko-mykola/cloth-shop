import mongoose, {Schema} from "mongoose";

export const LogsSchema = new mongoose.Schema({
    operationId: {
        type : Schema.Types.UUID,
        required : [true,'operationId is required'],
        index : true
    },
    name: {
        type : String,
        enum : {
            values : ['analytics-service','notification-service','products-service','search-indexer','users-service'],
            message : `{VALUE} is not supported`
        },
        lowercase : true,
        required : [true,'name is required']
    },
    status : {
        type : String,
        enum : {
            values : ['started','completed','failed'],
            message : `{VALUE} is not supported`
        },
        lowercase : true,
        required : [true,'status is required']
    }
},{
    timestamps: true,
    versionKey : false
})