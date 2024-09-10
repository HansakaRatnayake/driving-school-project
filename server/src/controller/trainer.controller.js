const { createTrainer } = require("../repository/trainer.repository");


const postTrainer = async (req, res, next) => {
    console.log("TrainerController");
    
    try {

      const trainerData = req.body;  
      const trainer = await createTrainer(trainerData); 
      res.status(201).json(trainer);  

  } catch (error) {

      console.error(`Error creating trainer: ${error.message}`);
      res.status(500);
      next(error);  

  }
}

module.exports = postTrainer;