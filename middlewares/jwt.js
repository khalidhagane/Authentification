

const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const loginrequired = async (req,res,next)=> {
    const token = req.cookies['access-token']
    console.log(token)
    if(token) {
        const validatetoken = await jwt.verify(token, process.env.JWT_SECRET)
        if (validatetoken) {
            res.user = validatetoken
            console.log(res.user)
            // console.log('token expireseeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            next()

        } else {
            console.log('token expires')
        }
    } else {
        console.log('token not found')
    }
}

module.exports = loginrequired