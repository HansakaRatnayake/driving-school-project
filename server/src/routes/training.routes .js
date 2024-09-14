const express = require('express');
const trainingController = require('../controller/training.controller');
const {saveTraining,findAllTrainings,updateTraining,deleteTraining} = trainingController;

 
const router = express.Router();


router.get('/',findAllTrainings);
router.post('/', saveTraining);
router.put('/', updateTraining);
router.delete('/:trainingId', deleteTraining);


module.exports = router;