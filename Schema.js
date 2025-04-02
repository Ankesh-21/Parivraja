import joi from 'joi';
import { Schema } from 'mongoose';
import mongoose from 'mongoose';
export const ListSchema = joi.object({
    Lists:joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        image:joi.string().required(),
        price:joi.string().required(),
        location:joi.string().required(),
        country:joi.string().required()
    }).required()
});
    
export const reviewSchema=joi.object({
    review:joi.object({
        comment:joi.string().required(),
        rating:joi.number().required()
    }).required()
});



