const nodemailer = require('nodemailer');
// const asyncHandler = require('express-async-handler');


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

module.exports = sendemail