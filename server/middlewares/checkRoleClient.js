const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const Role = require('../models/roleModel')
const User = require('../models/authModel')
const { findOne } = require('../models/roleModel')



const checkRoleClient = async (req,res,next)=> {
    const token = req.cookies['access-token']
    console.log(token)
    
        const validatetoken = await jwt.verify(token, process.env.JWT_SECRET)
        const users = await User.findOne({_id : validatetoken.id})
        // console.log(validatetoken.id);
        const roles = await Role.findOne({_id : users.role})
    // console.log(populate("role"));
        if(roles.role !== 'client'){
            
            res.send('access denied')
        }
        next()
   
}

module.exports = checkRoleClient