const jwt = require('jsonwebtoken')
const bcryptjs= require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/authModel')
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { json } = require('express');
const sendemail = require('../utils/sendemail')
const sendEmailPassword = require('../utils/sendEmailPassword')
const Role = require('../models/roleModel');
const { send } = require('process');

// create Token
const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn : '1d'
    })
}

//method post 
// url : /api/auth/login
// acess : public
const Login = asyncHandler(async (req,res, next) => {
    try {
        const{ email,password}= req.body
        if(!email || !password){
            res.status(400)
            next(new Error('Please add all fields'))
        }
        const findUser = await User.findOne({ email : email })

        if(findUser){
                const match = await bcryptjs.compare(password, findUser.password)
                if(match) {
                    
                    const token = createToken(findUser.id)
                    return res
                    .cookie('access-token',token)
                    .send('logged in succefully')
                }

                res.status(400)
                return next({ message: "password not correct"})

        } else{
            // console.log('user not regestered')
            res.status(400) 
            return next({message:"email not right"})

        }
    } catch (err) {
        console.log(err)
    }
   
    })

//method post 
// url : /api/auth/regester
// acess : public
const Regester = asyncHandler(async (req,res) => {
    const {email , password, name, role }= req.body

    if(!email || !password || !name || !role){
        res.status(400)
        throw new Error('Please add all fields ')
        // return next({message:"Please add all fields"})
    }

    // check if user exists
    const authExists = await User.findOne({email})
    const roles = await Role.findOne({role})
    console.log(roles)
    if(authExists){
        // res.status(400).send("user already exist")
        res.status(400)
        throw new Error('user already exist ')
    }
    //hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)

    // create user
    let user = await User.create({
        name,
        email,
        password: hashedPassword,
        status:false,
        token: crypto.randomBytes(64).toString('hex'),
        role: roles.id,
        
    })
    
    // rappel function send email
    sendemail(user.email,user.token);

    if(user){
        res.status(201).json(user)
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})

//------------ function verification
const verificationEmail = async (req,res)=>{
    const emailtoken = req.params.token
    const user = await User.findOne({token:emailtoken})
    if(user){
        user.token = null
        user.status = true
        await user.save();
        
    } 
    else{
        console.log("tekon non valid")
    }
}

//method post 
// url : /api/auth/Forgetpassword
// acess : public
const Forgetpassword = async (req,res) => {
    const {email}= req.body
    const user = await User.findOne({email})
    if(!user)return res.status(400).json({err: 'Please add email'})
    const token = createToken(user.id)
    // console.log(token)
    try{
        sendEmailPassword(user.email, token)
        res.send('mail sent succefully')
    } catch(error) {
        console.log(error)
    }
}

//method post 
// url : /api/auth/resetpassword
// acess : public
const Resetpassword =  asyncHandler ( async (req,res) => {
    const {password} = req.body
    const token =  req.params.token
        console.log(token)
    const userid = await jwt.verify(token,process.env.JWT_SECRET)

    const salt = await bcryptjs.genSalt(10)
    const hashPassword = await bcryptjs.hash(password, salt)
    
    await User.findOneAndUpdate(
        {_id : userid.id},
        {password : hashPassword}
    )

    res.status(200).json({mess : 'password has update successfuly'})
})

module.exports = {Login,Regester,Forgetpassword,Resetpassword,verificationEmail};

