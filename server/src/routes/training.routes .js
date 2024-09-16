const express = require('express');
const trainingController = require('../controller/training.controller');
const authenticate = require('../middleware/auth.middleware');
const permission = require('../middleware/permisson.middleware');
const {saveTraining,findAllTrainings,updateTraining,deleteTraining} = trainingController;
const authenticate = require('../middleware/auth.middleware');
const permission = require('../middleware/permisson.middleware');

 
const router = express.Router();


// router.get('/', authenticate, permission('training:READ'),findAllTrainings);
// router.post('/', authenticate, permission('training:CREATE'),saveTraining);
// router.put('/', authenticate, permission('training:UPDATE'), updateTraining);
// router.delete('/:trainingId', authenticate, permission('training:DELETE'), deleteTraining);

router.get('/', findAllTrainings);
router.post('/', saveTraining);
router.put('/',  updateTraining);
router.delete('/:trainingId',  deleteTraining);

module.exports = router;