const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(`mongodb+srv://Prashant30123:12345@mern-cluster.myed6.mongodb.net/mern?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
       console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB