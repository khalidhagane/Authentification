const express = require('express');
const router = express.Router();
const {Client}= require('../controllers/clientController');
const jwt = require('../middlewares/jwt');

router.get('/client/me',jwt, Client);

module.exports = router;