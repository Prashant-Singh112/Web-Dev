import express from 'express'
import bodyParser from "body-parser"
import cors from 'cors'
import mongoose from "mongoose"

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors);

const CONNECTION_URL="mongodb+srv://prashant:12345@cluster0.cjcih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const port=process.env.PORT||5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
.catch((error)=>console.log(error.message));


