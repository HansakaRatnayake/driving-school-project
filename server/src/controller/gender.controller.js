const genderService = require('../service/gender.service');
const {findAll} = genderService;

const findAllGenders = async (req, res, next) =>{
   
    const responceData = await findAll();
    res.status(responceData.statuscode).json(responceData.data);  
    
}


module.exports = {findAllGenders}