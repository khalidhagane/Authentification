// const userModel = require('../models/userModel')
const authModel = require('../models/authModel')


// const getUser = (req, res) =>{
//     const name = req.body.name;
//     console.log(req.body);

//     const newUser =new userModel({ name });
//     newUser
//     .save()
//     .then((doc) =>{
//         res.json(doc);
//     })
//     .catch((err) =>{
//         res.json(err)
//     });
// };
// module.exports = getUser;

// @desc Register new user
//@router  POST /api/auth/user
// @access public

const registerUser = (req,res) => {
    res.json({ message: 'Register User'})
}

module.exports = {
    registerUser,
}