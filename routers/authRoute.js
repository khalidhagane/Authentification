const express = require('express');
const router = express.Router() 
const {Login,Regester,Forgetpassword,Resetpassword,verificationEmail} = require('../controllers/AuthController') 


router.post('/login',Login);
router.post('/regester',Regester);
router.post('/forgetpassword',Forgetpassword);
router.post('/resetpassword',Resetpassword);
router.get('/verifieremail/:token',verificationEmail);


module.exports = router;