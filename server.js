const express = require("express");
const dotenv = require('dotenv').config()
// const port = 5000
// const colors = require('colors')
const connectDB = require('./config/configdb')
const app = express();
// const cookieparser = require('cookie-paser')
const cookie = require('cookie-parser')
// app .listen(port,() => console.log(`server started on port ${port}`))

const mongoose = require('mongoose');

app.use(cookie())
// express app
app.use(express.json())
app.use(express.urlencoded({extended:true }))
connectDB();

const {errorHandler} = require('./middlewares/errorMiddleware')
// const routeUser = require("./routers/userRoute")
const router = require('./routers/authRoute')
const routerManager =  require('./routers/managerRoute')
const routerLivreur =  require('./routers/livreurRoute')
const routerClient =  require('./routers/clientRoute')

// const {errorHandler} = require('./middlewares/errorMiddleware')

// app.use(express.urlencoded({extended:false}))
// app.use('/api/auth',routeUser)
// app.use('/api/auth',routerUser)
app.use('/api/auth',router)
app.use('/api/user',routerManager)
app.use('/api/user',routerLivreur)
app.use('/api/user',routerClient)
app.use(errorHandler)


//


// // Error Handler
// app.all('*',(req,res,next)=>{
//     next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400))
// }); 

//global Error Handler
// app.use(globalError);

const port = process.env.PORT || 8081
 app.listen(port,(err)=>{
    if(!err){
    console.log(`server running on port ${port}`)
}else {
    console.log(err)
}
})