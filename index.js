import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import engine from 'ejs-mate'; // Assuming you're using ejs-mate
import mongoose from 'mongoose'; // If you're using MongoDB
import Lists from './Models/Listing.js';
import review from './Models/Review.js';
import {reviewSchema,ListSchema} from './Schema.js';

const app = express();
const port = 3000;
const mongo_url = "mongodb://127.0.0.1:27017/parivraja";

// Set __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// EJS configuration
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

async function dbconnect(){
    mongoose.connect(mongo_url);
}

app.get('/Places',async(req,res)=>{
    const allPlaces=await Lists.find({});
    //console.log(allPlaces);
    res.render('./Places/index.ejs',{allPlaces});
});

app.get('/',(req,res)=>{
    res.send('I am Root');
});

function validatePlaces(req,res,next){
    let {error} = ListSchema.validate(req.body);
    if (error){
        let errmsg=error.details.map((el)=>
            el.message).join(',');
            throw new ExpressError(400,errmsg);
    }
    else{
        next();
    }
}
function validateReview(req,res,next){
    let {error} = reviewSchema.validate(req.body);
    if (error){
        let errmsg=error.details.map((el)=>
            el.message).join(',');
            throw new ExpressError(400,errmsg);
    }
    else{
        next();
    }
}

app.get('/addPlace',(req,res)=>{
    res.render('./Places/newPlace.ejs');
});
app.post('/addNew',validatePlaces,async(req,res)=>{
    let newPlace=req.body.newPlace;
    let minprice=`${newPlace.minprice}`;
    let maxprice=`${newPlace.maxprice}`;
    let place={
        title:newPlace.title,
        description:newPlace.desc,
        price:'',
        location:newPlace.location,
        country:newPlace.country,
        image:''
    };
    console.log(minprice,maxprice);
    if (minprice==='0' && maxprice==='0'){
        place.price='Free';
    }
    else if (minprice!='0' && maxprice!='0'){
        place.price='\u20B9'+minprice+' - '+maxprice;
        console.log(place.price);
    }
    else{
        minprice!='0'?place.price='\u20B9'+minprice:place.price='\u20B9'+maxprice;
    }
    console.log(place);
    await Lists.create(place).then(()=>{
        console.log('Successfully added place');
    }).then((err)=>{
        console.log(err);
    });
    res.redirect('/Places');
});

// Update Route
/*

first get request'/place/:id/edit' -> render a form

then put request '/place/:id'

*/

app.get('/place/:id/edit',async(req,res)=>{
    let Id=req.params.id;
    let data=await Lists.findOne({_id:Id}).exec();
    console.log(data);
    if (data){
        res.render('./Places/Edit.ejs',{data});
    }
});

app.put('/place/:id/edit',async(req,res)=>{
    let result=req.body;
    result.price='\u20B9'+result.price;
    let Id=req.params.id;
    await Lists.findByIdAndUpdate(Id,{...result}).then((response,err)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log('Successfully Updated');
            
        }
        res.redirect('/Places');
    });
    
});

app.get('/place/:id',async(req,res)=>{
    let thatplace=await Lists.findOne({_id:req.params.id}).exec();
    if (thatplace){
        res.render('./Places/Oneplace.ejs',{thatplace});
    }
});

app.delete('/place/:id/delete',async(req,res)=>{
    let Id=req.params.id;
    console.log(Id);
    await Lists.findByIdAndDelete(Id).then((result,err)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log('Deleted Successfully');
        }
    });
    res.redirect('/Places');
});

// Post route for review
app.post('/Places/:id/review',validateReview,async (req,res)=>{
    // console.log(req.params);
    
    let Id=req.params.id;
    let place=await Lists.findById(Id).exec();
    let newreview=new review(req.body.review);
    
    place.reviews.push(newreview);
    newreview.save();
    place.save();
    res.send('Successfuly saved');
});

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});