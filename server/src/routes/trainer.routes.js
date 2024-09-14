const express = require('express');
const trainerController = require('../controller/trainer.controller');
const {saveTrainer,findAllTrainers,updateTrainer,deleteTrainer} = trainerController;

 
const router = express.Router();


router.get('/',findAllTrainers);
router.post('/', saveTrainer);
router.put('/', updateTrainer);
router.delete('/:email', deleteTrainer);




module.exports = router;