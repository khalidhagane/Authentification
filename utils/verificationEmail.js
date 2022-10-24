


// //------------ function verification
// const verificationEmail = async (req,res)=>{
//     const emailtoken = req.params.token
//     const user = await User.findOne({token:emailtoken})
//     if(user){
//         user.token = null
//         user.status = true
//         await user.save();
//     } 
//     else{
//         console.log("tekon non valid")
//     }
// }

// module.exports = verificationEmail