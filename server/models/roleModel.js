
const mongoose = require('mongoose')

// // create Schema
const roleSchema = mongoose.Schema({
   
      role:{
        type:String,
        required:true
        // role: //variable role
      }
})
module.exports = mongoose.model('Role',roleSchema)

