const express = require('express');
const router = express.Router() 
const {Manager} =require('../controllers/ManagerController')
const checkRoleManager = require('../middlewares/checkRoleManager')
const jwt = require('../middlewares/jwt')

router.get('/manager/me',jwt,checkRoleManager, Manager);
// router.post('/manager/me', Manager);

module.exports = router;