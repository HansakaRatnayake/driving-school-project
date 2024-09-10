const express = require('express');
const postTrainer = require('../controller/trainer.controller');

console.log("trainer-routes");

const router = express.Router();


router.post('/', postTrainer);

module.exports = router;