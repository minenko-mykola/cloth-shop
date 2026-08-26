import mongoose from "mongoose";

export const HeadWearSchema = new mongoose.Schema({
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
    },
    visor : {
        type : String,
        required : true,
        enum : {
            values : [],
            message : ''
        }
    },
    earsClosed : {
        type : Boolean,
        required : true,
        default: false
    },
    sizeAdjuster : {
        type : Boolean,
        required : true,
        default: false
    },
    ventilationHoles : {
        type : Boolean,
        required : true,
        default: false
    }
})