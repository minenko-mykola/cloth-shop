import mongoose from "mongoose";

export const BlouseSchema = new mongoose.Schema({
    size : {
        type : String,
        required : true,
        enum : {
            values : ['xs' , 's', 'x' , 'm' , 'l' , 'xl' , 'xxl' , 'xxxl'],
            message : '{VALUE} is not supported'
        }
    },
    back : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    },
    collar : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    },
    fashion : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    },
    fasteners : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    },
    length : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    },
    sleeve : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    },
    season : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : '{VALUE} is not supported'
        }
    }
},{
    timestamps : false,
    versionKey : false
})