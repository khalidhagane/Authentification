const jwt = require('jsonwebtoken')
const bcryptjs= require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/authModel')
const nodemailer = require('nodemailer');

// const userModel = require('../models/userModel')
// const bcrypt= require('bcrypt');
const crypto = require('crypto');
const { json } = require('express');


const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn : '1d'
    })
}
// console.log(createToken)
//method post 
// url : /api/auth/login
// acess : public
const Login = async (req,res) => {
try {
    const{ email,password}= req.body
    const findUser = await User.findOne({ email : email})
    if(findUser){
        const match = await bcryptjs.compare(password, findUser.password)
        if (match) {
            //create token 
            const token = createToken(findUser.id)
            // start token in cookie 
            res
                .cookie('access-token',token)
                .send('logged in succefully')
            // console.log(token)
            // res.status(200).json({mssage:'password valid'})
            console.log('logged in succefully')
            
        } else {
            console.log('password incorrect')
            res.send('password incorrect')
        }
    }
    else{
        console.log('user not regestered')
    }
} catch (err) {
    console.log(err)
    
}








// ---------------- partie handler error ------------------
    const {email , password, name }= req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please add all fields ')
    }
    else {
        res.status(200).json({mssage:'les inpots is valid'})
    }
// ---------------- partie handler error ------------------
}

//method post 
// url : /api/auth/regester
// acess : public
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
        role,
        

    })
    
 
    // const gToken = generer_token(user._id,user.email)

    // res.status(201).json({token: gToken})

    // await User.updateOne({_id: user._id }, { $set: { token: gToken } })

    // get user
    // res.json(user)

    // rappel function send email
    sendemail(user.email,user.token);

    if(user){
        res.status(201).json(user)
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
    // console.log(user)

    // generer_token();
// genirir token 


    // // findOne virification email
    // // const gToken = generer_token(user._id,user.email)
    // const token = jwt.sign({email: req.body.email}, config.secret)
    // //  const token = user.email
    //  console.log(token)
    
})
//--------------------------------- 
// function sendemail
const sendemail = (email,token) => {
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

const sendEmailPassword = (email,token) => {
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
        subject: 'rest password',
        text: 'Node.js testing mail for GeeksforGeeks',
        html: `<h2 >Pls Click on The link <a href="http://localhost:8081/api/auth/resetpassword/${token}">rest password</a></h2>`, // html body
    };
    
    try {
        mailTransporter.sendMail(mailDetails)
    } catch (error) {
        console.log(error)
    }

}

//method post 
// url : /api/auth/Forgetpassword
// acess : public
const Forgetpassword = async (req,res) => {
    // res.status(200).send(req.body)
    // res.status(200).json({mssage:'teste Forgetpassword'})
    
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
    // res.status(200).send(req.body)
    // res.status(200).json({mssage:'teste Resetpassword'})
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

