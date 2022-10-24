const mongoose = require('mongoose')

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
        type:String,
        required:true
        // role: //variable role
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

