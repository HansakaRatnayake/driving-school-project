const express = require('express');
const trainerController = require('../controller/trainer.controller');
const {saveTrainer,findAllTrainers} = trainerController;


const router = express.Router();


router.get('/',findAllTrainers);
router.post('/', saveTrainer);

module.exports = router;