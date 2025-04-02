import mongoose, { Types } from "mongoose";
import { Schema } from "mongoose";

const reviewSchema=new Schema({
    comment:{
        type:String
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

});

const review=mongoose.model('review',reviewSchema);

export default review;
