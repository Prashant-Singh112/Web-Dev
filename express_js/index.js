const express=require('express')
const  app=express()
const path=require('path')
const port=3000

app.use(express.static(path.join(__dirname,"public")))

app.get('/hello/:name',(req,res)=>{
    res.send('Hello World'+req.params.name)
})


app.get('/about',(req,res)=>{
    // res.send('Hello World about')
    // res.sendFile(path.join(__dirname,'index.html'))
    res.json({"name":"prashant"})
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})