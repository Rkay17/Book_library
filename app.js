require ('dotenv').config()

const express = require("express")

const postRouter = require('./routes/postRoute')




app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('uploads'))

const dbConnect = async () => {
    try {
    const  conn = await mongoose.connect('mongodb+srv://gbemikay17:<THELORDS96$>@ruthzies.ecaouaz.mongodb.net/?retryWrites=true&w=majority&appName=Ruthzies',{useNewUrlParser: true,});
console.log("Connection is successfull")
    }catch(error){
console.log(error);
    }
    dbConnect()
}
   // const connected = await mongoose.connect(process.env.DB_URI) console.log('Connected to Database') } catch (error) { console.log(error) } }
    
    //dbConnection()

app.use('/', postRouter)

process.env.MONGODB_URI




module.exports = dbConnect;