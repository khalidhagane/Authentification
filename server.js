require('dotenv').config()
const router = require('./routers/authRoute')
const routerManager =  require('./routers/managerRoute')
const routerLivreur =  require('./routers/livreurRoute')
const routerClient =  require('./routers/clientRoute')
const {errorHandler} = require('./middlewares/errorMiddleware')


const express = require("express");
const app = express();
app.use(express.json())

app.use('/api/auth',router)
app.use('/api/user',routerManager)
app.use('/api/user',routerLivreur)
app.use('/api/user',routerClient)
app.use(errorHandler)

//Error Handling
app.all('*',(req,res,next)=>{
    // const err = new Error(`Can't find this route: ${req.originalUrl}`);
    // next(err.message);
    next(new ApiError("message",statusCode))
});
//global Error Handling
app.use((err,req,res,next)=>{
    res.status(500).json({err})
});

const port = process.env.PORT || 8081
 app.listen(port,(err)=>{
    if(!err){
    console.log(`server running on port ${port}`)
}else {
    console.log(err)
}
})