// const userModel = require('../models/userModel')

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