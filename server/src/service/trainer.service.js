const Trainer = require('../model/trainer.model');
const trainerRepo = require('../repository/trainer.repository');
const {createTrainer,findAllTrainers,deleteTrainer,updateTrainer} = trainerRepo;

 
const create = async (trainer) => {

    try{
        const resData = await createTrainer(trainer);
        return {
            data:"Trainer Successfully Registerd",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Trainer Registraion Error" + err,
            statuscode:500
           }
    }
}

const findAll = async (queryparamobject) => {

    const {name, email, nic} = queryparamobject;

    const query = {};

    if(name && name.trim() !== '') query.name = { $regex: name, $options: 'i' };
    if(email && email.trim() !== '') query.email = { $regex: email, $options: 'i' };
    if(nic && nic.trim() !== '') query.nic = { $regex: nic, $options: 'i' };

    try{
        const resData = await findAllTrainers(query);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching trainers: "+err.message,
            statuscode:500
           }
    }

}

const update = async (trainer) => {

    try{
        const resData = await updateTrainer(trainer);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while updating trainers: "+err.message,
            statuscode:500
           }
    }

}

const remove = async (trainerEmail) => {

    try{
        if(!await Trainer.findOne({email:trainerEmail})) return {
            data:"Triner Not Found, Input a valid trainer",
            statuscode:404
        }
        const resData = await deleteTrainer(trainerEmail);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting trainers: "+err.message,
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll,
    update,
    remove
}