const express = require('express');
const trainingController = require('../controller/training.controller');
const {saveTraining,findAllTrainings,updateTraining,deleteTraining} = trainingController;

 
const router = express.Router();


router.get('/', authenticate, permission('training:READ'),findAllTrainings);
router.post('/', authenticate, permission('training:CREATE'),saveTraining);
router.put('/', authenticate, permission('training:UPDATE'), updateTraining);
router.delete('/:trainingId', authenticate, permission('training:DELETE'), deleteTraining);


module.exports = router;