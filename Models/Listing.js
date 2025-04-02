import mongoose from "mongoose";
import review from "./Review.js";
import { Schema } from "mongoose";
const default_img="https://imgs.search.brave.com/rvxGQwuyStDUG4meD-Z2nYFak-exhZkKGlEqOE-RDAM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9waWN0dXJlc3F1/ZS1zbm93eS12aWxs/YWdlLWluLXRoZS1t/b3VudGFpbnMtZnJl/ZS1pbWFnZS5qcGVn/P3c9NjAwJnF1YWxp/dHk9ODA";
const ListSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:default_img,
        set:(img)=>{
            return img==''?default_img:img;
        }
    },
    price:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:'review',
        }
    ]
});

const Lists=mongoose.model('List',ListSchema);
export default Lists;