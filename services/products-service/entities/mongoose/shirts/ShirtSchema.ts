import mongoose from "mongoose";

export const ShirtSchema = new mongoose.Schema({
    size : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    collar : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    cut : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    fabricDensity : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    fastener : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    sleeveLength : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    type : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    seasons : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    sex : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    }
})