const Training = require('../model/training.model');
const trainingRepo = require('../repository/training.repository');
const {createTraining,findAllTrainings,deleteTraining,updateTraining} = trainingRepo;

 
const create = async (training, image) => {

    try{

        const resData = await createTraining({...training,image:{data:image.buffer,contentType:image.mimetype}});
        return {
            data:"Training Successfully Registerd",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Training Registraion Error: "+err.message,
            statuscode:500
           }
    }
}

const findAll = async (queryparamobject) => {

    const {name} = queryparamobject;

    const query = {};

    if(name && name.trim() !== '') query.name = { $regex: name, $options: 'i' };

    try{
        const resData = await findAllTrainings(query);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching trainings: "+err.message,
            statuscode:500
           }
    }

}


const update = async (training) => {

    try{
        const resData = await updateTraining(training);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while updating trainings: "+err.message,
            statuscode:500
           }
    }

}

const remove = async (trainingId) => {

    try{
        if(!await Training.findOne({_id:trainingId})) return {
            data:"Training Not Found, Input a valid Training",
            statuscode:404
        }
        const resData = await deleteTraining(trainingId);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting trainings: "+err.message,
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