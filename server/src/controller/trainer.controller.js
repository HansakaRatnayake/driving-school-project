const trainerService = require('../service/trainer.service');
const {create,findAll} = trainerService;

 
const saveTrainer = async (req, res, next) => {
  
      const trainerData = req.body;  
      const responceData = await create(trainerData);
      res.status(responceData.statuscode).json(responceData.data);  
}


const findAllTrainers = async (req, res, next) => {
     const responceData = await findAll();
     res.status(responceData.statuscode).json(responceData.data);
}




module.exports = {saveTrainer,findAllTrainers};