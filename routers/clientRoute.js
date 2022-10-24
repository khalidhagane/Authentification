const express = require('express');
const router = express.Router();
const {Client}= require('../controllers/clientController');
const jwt = require('../middlewares/jwt');
const checkRoleClient = require('../middlewares/checkRoleClient')

router.get('/client/me',jwt,checkRoleClient, Client);

module.exports = router;