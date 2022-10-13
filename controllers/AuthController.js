//method post 
// url : /api/auth/resetpassword
// acess : public
const Login = (req,res) => {
    res.status(200).send(req.body)
}

//method post 
// url : /api/auth/resetpassword
// acess : public
const Regester = (req,res) => {
    res.status(200).send(req.body)
    
}

//method post 
// url : /api/auth/resetpassword
// acess : public
const Forgetpassword = (req,res) => {
    res.status(200).send(req.body)
}

//method post 
// url : /api/auth/resetpassword
// acess : public

const Resetpassword = (req,res) => {
    res.status(200).send(req.body)
}

module.exports = {Login,Regester,Forgetpassword,Resetpassword};
