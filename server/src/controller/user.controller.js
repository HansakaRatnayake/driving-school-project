const userService = require('../service/user.service');
const {create,findAll,findByUsername} = userService;

 
const saveUser = async (req, res, next) => {
  
      const userData = req.body;  
      const responceData = await create(userData);
      res.status(responceData.statuscode).json(responceData.data);  
}


const findAllUsers = async (req, res, next) => {
     const responceData = await findAll();
     res.status(responceData.statuscode).json(responceData.data);
}

const findUserByUsername = async (req, res, next) => {
      const responceData = await findByUsername(req.body.username);
      res.status(responceData.statuscode).json(responceData.data);
 }




module.exports = {saveUser,findAllUsers};