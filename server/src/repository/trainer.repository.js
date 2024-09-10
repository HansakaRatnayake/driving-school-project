const Trainer = require('../model/trainer.model');





     const createTrainer = async (trainer) => {

        console.log("trainer awaaa");
        
        try{

            const newTrainer = new Trainer(trainer);
            return await newTrainer.save();

        }catch(error){
            throw new Error(`Error creating trainer: ${error.message}`);
        }
    }


     const findAllTrainers = async()=>{
        try{

            return await Trainer.find({}).exec();

        }catch(error){
            throw new Error(`Error fetching trainer: ${error.message}`);
        }
    }

    module.exports = {
        createTrainer,
        findAllTrainers
    };