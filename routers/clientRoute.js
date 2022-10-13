const express = require('express');
const router = express.Router();
const {Client}= require('../controllers/clientController');

router.get('/client/me',Client);

module.exports = router;