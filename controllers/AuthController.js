const jwt = require('jsonwebtoken')
const bcryptjs= require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/authModel')
const nodemailer = require('nodemailer');

// const userModel = require('../models/userModel')
// const bcrypt= require('bcrypt');
const crypto = require('crypto');



//method post 
// url : /api/auth/login
// acess : public
const Login =  (req,res) => {
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
    const {email , password, name, role }= req.body

    if(!email || !password || !name || !role){
        res.status(400)
        throw new Error('Please add all fields ')
    }

    // check if user exists
    const authExists = await User.findOne({email})
    if(authExists){
        res.status(400).send("user already exist")
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
        role:role
        

    })
 
    // const gToken = generer_token(user._id,user.email)

    // res.status(201).json({token: gToken})

    // await User.updateOne({_id: user._id }, { $set: { token: gToken } })

    // get user
    res.json(user)

    // rappel function send email
    sendemail(user.email,user.token);

    if(user){
        res.status(201).json(user)
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

    // generer_token();
// genirir token 


    // findOne virification email
    // const gToken = generer_token(user._id,user.email)
    const token = jwt.sign({email: req.body.email}, config.secret)
    //  const token = user.email
     console.log(token)
    

//--------------------------------- 
// function sendemail
    function sendemail(email,token) {
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.password_email
                }
            });
            
            let mailDetails = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Test mail',
                text: 'Node.js testing mail for GeeksforGeeks',
                html: `<h2 >Pls Click on The link <a href="http://localhost:8081/api/auth/verifieremail/${token}">validation</a></h2>`, // html body
            };
            
            try {
                mailTransporter.sendMail(mailDetails)
            } catch (error) {
                console.log(error)
            }

    }
})

//------------------------ function verification
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

//------------------------ function verification
// const generer_token = async(id,email)=>{
//     return jwt.sign({ email: email,  _id: id }, process.env.JWT_SECRET_KEY,
//         { expiresIn: '10m' });
    
//     }



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

module.exports = {Login,Regester,Forgetpassword,Resetpassword,verificationEmail};

