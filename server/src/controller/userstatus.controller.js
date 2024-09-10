const userStatusService = require('../service/userstatus.service');
const {findAll} = userStatusService;

const findAllUserStatuses = async (req, res, next) =>{
   
    const responceData = await findAll();
    res.status(responceData.statuscode).json(responceData.data);  
    
}


module.exports = {findAllUserStatuses}