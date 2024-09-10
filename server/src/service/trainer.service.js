const trainerRepo = require('../repository/trainer.repository');
const {createTrainer,findAllTrainers} = trainerRepo;


const create = async (trainer) => {

    try{
        const resData = await createTrainer(trainer);
        return {
            data:"Trainer Successfully Registerd",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Trainer Registraion Error",
            statuscode:500
           }
    }
}

const findAll = async () => {

    try{
        const resData = await findAllTrainers();
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching trainers",
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll
}