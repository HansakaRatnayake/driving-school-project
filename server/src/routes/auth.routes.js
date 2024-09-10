const express = require('express');
const authController = require('../controller/auth.controller');
const {login} = authController;

 
const router = express.Router();

//define routes
router.post('/login', login);

module.exports = router;