const trainingService = require('../service/training.service');
const {create,findAll,update,remove} = trainingService;

 
const saveTraining = async (req, res, next) => {
  
      const trainingData = req.body;  
      const responseData = await create(trainingData);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllTrainings = async (req, res, next) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}

  const updateTraining = async (req, res) => {
      const updatedTraining = req.body;
      const responseData = await update(updatedTraining);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 
  const deleteTraining = async (req, res) => {
 
      const {trainingId} = req.params;
      const responseData = await remove(trainingId);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 



module.exports = {saveTraining,findAllTrainings,updateTraining,deleteTraining};