
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
      },
      role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
      },
    
      token: {
          type: String,
          
        },
    status: {
        type: Boolean,
        required: true
      }
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('User',authSchema)

