const express = require('express');
const router = express.Router();
const {Livreur}= require('../controllers/livreurController');

router.get('/livreur/me',Livreur);

module.exports = router;