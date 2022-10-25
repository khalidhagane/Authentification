const express = require('express');
const router = express.Router();
const {Livreur}= require('../controllers/livreurController');
const checkRoleLivreur = require('../middlewares/checkRoleLivreur')
const jwt = require('../middlewares/jwt')

router.get('/livreur/me',jwt,checkRoleLivreur,Livreur);

module.exports = router;