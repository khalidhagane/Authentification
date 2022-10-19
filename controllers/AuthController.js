const jwt = require('jsonwebtoken')
const bcryptjs= require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/authModel')
// const userModel = require('../models/userModel')


//method post 
// url : /api/auth/login
// acess : public
const Login =  (req,res) => {
    // res.status(200).send(req.body)
    // res.status(200).json({mssage:'teste Regester'})
    const {email , password, name }= req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please add all fields ')
    }
    else {
        res.status(200).json({mssage:'teste Regester'})
    }
    
}

const Regester = asyncHandler(async (req,res) => {

    const {email , password, name }= req.body

    if(!email || !password || !name){
        res.status(400)
        throw new Error('Please add all fields ')
    }

    // check if user exists
    const authExists = await User.findOne({email})
    // const authExists = await User.findOne({email : email})
    if(authExists){
        // console.log("ggggggggggggggggggggggggggggg!g")
        res.status(400).send("user already exist")
        // throw new Error('user already exists')
    }
    //hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)

    // create user
    const user_ = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user_){
        res.status(201).json({
            _id : user_.id,
            name : user_.name,
            email: user_.email
        })
    }else{
        // console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
        res.status(400)
        throw new Error('Invalid user data')
    }

    // res.status(200).json({mssage:'teste Regester'})

})

//m ethod post 
// url : /api/auth/Regester    
// acess : public


//method post 
// url : /api/auth/Forgetpassword
// acess : public
const Forgetpassword = (req,res) => {
    // res.status(200).send(req.body)
    // res.status(200).json({mssage:'teste Forgetpassword'})
    

}

//method post 
// url : /api/auth/resetpassword
// acess : public
const Resetpassword =  (req,res) => {
    // res.status(200).send(req.body)
    // res.status(200).json({mssage:'teste Resetpassword'})
    
}

module.exports = {Login,Regester,Forgetpassword,Resetpassword};

