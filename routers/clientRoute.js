const express = require('express');
const router = express.Router();
const {Client}= require('../controllers/clientController');
const jwt = require('../middlewares/jwt');
// const checkRoleClient = require('../middlewares/ceckRoleClient')

router.get('/client/me',jwt, Client);

module.exports = router;