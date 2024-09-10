const User = require('../model/user.model');

 
     const createUser = async (user) => {
        
        try{

            const newUser = new User(user);
            return await newUser.save();

        }catch(error){
            //throw error if error
            throw new Error(`Error creating trainer: ${error.message}`);
        }
    }


     const findAllUsers = async()=>{
        try{

            return await User.find({}).populate('userstatus').exec();

        }catch(error){
            
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    const findUserByUsername = async(username)=> {
        try{
            return await User.findOne({username});
        }catch(error){
            throw new Error(`Error fetching user: ${error.message}`);
        }
    }



    module.exports = {createUser,findAllUsers,findUserByUsername};