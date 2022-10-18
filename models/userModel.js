// const mongoose = require('mongoose')

// // create Schema
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//       },
//       role: {
//         type: String,
//         required: true,


//       }

// })

// // create model
// // app.post('/', (req, res) =>{
// //     const name = req.body.name;
// //     console.log(req.body);

// //     const newUser = userModel({name});
// //     newUser
// //     .save()
// //     .then((doc) =>{
// //         res.json(doc);
// //     })
// //     .catch((err) =>{
// //         res.json(err)
// //     });
// // });

// module.exports =  mongoose.model('users', schema)









// const mongoose = require('mongoose');

// // create Schema
// const userSchema = new mongoose.Schema({
//     name: String,
// });

// // create model
// const userModel = mongoose.model('users',userSchema);

// module.exports = userModel;