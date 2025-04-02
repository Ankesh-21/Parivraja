import mongoose from "mongoose";
import Lists from "./Listing.js";
import places from '../Places.js'

const mongo_url="mongodb://127.0.0.1:27017/parivraja";

async function dbconnect(){
    mongoose.connect(mongo_url);
}
dbconnect().then(()=>{
    console.log(`DB connected`);
}).then((err)=>{
    console.log(err);
});

async function initDB(){
    await Lists.deleteMany({});
    await places.forEach(place => {
        Lists.create(place);
    });
}
initDB();