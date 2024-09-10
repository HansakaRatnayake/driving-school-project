const Trainer = require('../model/trainer.model');


     const createTrainer = async (trainer) => {
        
        try{

            const newTrainer = new Trainer(trainer);
            return await newTrainer.save();

        }catch(error){
            console.log("man wada whuttooo");
            throw new Error(`Error creating trainer: ${error.message}`);
        }
    }


     const findAllTrainers = async()=>{
        try{

            return await Trainer.find({}).populate('gender').exec();

        }catch(error){
            
            throw new Error(`Error fetching trainer: ${error.message}`);
        }
    }



    module.exports = {createTrainer,findAllTrainers};