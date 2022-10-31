const express = require("express");
const dotenv = require('dotenv').config()
const connectDB = require('./config/configdb')
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors')

const mongoose = require('mongoose');

app.use(cors())
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({extended:true }))
connectDB();


const router = require('./routers/authRoute')
const routerManager =  require('./routers/managerRoute')
const routerLivreur =  require('./routers/livreurRoute')
const routerClient =  require('./routers/clientRoute')
const {errorHandler} = require('./middlewares/errorMiddleware')

app.use('/api/auth',router)
app.use('/api/user',routerManager)
app.use('/api/user',routerLivreur)
app.use('/api/user',routerClient)
app.use(errorHandler)


const port = process.env.PORT || 3001
 app.listen(port,(err)=>{
    if(!err){
    console.log(`server running on port ${port}`)
}else {
    console.log(err)
}
})