const userStatusRepo = require('../repository/userstatus.repository');
const {findAllUserStatuses} = userStatusRepo;


const findAll = async () =>{

    try{
        
        return {
            data : await findAllUserStatuses(),
            statuscode : 200
        }

    }catch(err){
        return {
            data : "UserStatus Fetching Error",
            statuscode : 500
        }
    }
} 


module.exports = {
    findAll
}