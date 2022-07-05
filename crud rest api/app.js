const express= require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/AlienDBex'
const app=express()

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

const alienRouter=require('./routers/aliens')
app.use('/',alienRouter)  //middleware

app.use(express.json())

app.listen(9000,()=>{
    console.log('Server started')
})