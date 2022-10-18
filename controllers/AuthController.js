const asyncHandler = require('express-async-handler');
// const userModel = require('../models/userModel')


//method post 
// url : /api/auth/login
// acess : public
const Login = asyncHandler(async (req,res) => {
    if(!req.body.email || !req.body.password){

        res.status(400)
        throw new Error ('please add email et password ' )
        
    }
    else{
    res.status(200).json({message:' password et email is valid'})
    // res.status(200).json({mssage:'teste'} )
    }

    // if(!req.body.email){
    //     res.status(400)
    //     throw new Error ('please add email ')
    // }
    // else{
    // res.status(200).json({message:' email is valid'})
    // // res.status(200).json({mssage:'teste'} )
    // }

    // if(!req.body.password){
    //     res.status(400)
    //     throw new Error ('please add password ')
    // }
    // else{
    // res.status(200).json({message:' password is valid'})
    // // res.status(200).json({mssage:'teste'} )
    // }
    
})

//m ethod post 
// url : /api/auth/Regester    
// acess : public
const Regester =  (req,res) => {
    // res.status(200).send(req.body)
    // res.status(200).json({mssage:'teste Regester'})
    
    
}

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

