// require('dotenv').config()
const router = require('./routers/authRoute')

const express = require("express");
const app = express();

app.use(express.json())
app.use('/api/auth',router)



const port = process.env.PORT || 8081
 app.listen(port,(err)=>{
    if(!err){
    console.log(`server running on port ${port}`)
}else {
    console.log(err)
}
})