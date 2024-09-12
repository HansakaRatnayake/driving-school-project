const express = require('express');
const authController = require('../controller/auth.controller');
const {login,signup} = authController;

 
const router = express.Router();

//define routes
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;