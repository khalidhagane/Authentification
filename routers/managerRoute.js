const express = require('express');
const router = express.Router() 
const {Manager} =require('../controllers/ManagerController')


router.get('/manager/me', Manager);

module.exports = router;