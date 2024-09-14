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


     const findAllUsers = async(searchQuery)=>{
       
        try{
            console.log(searchQuery);
            return await User.find(searchQuery).select('-password').populate('userstatus').populate('training').exec();

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

    const updateUser = async(user)=> {
        try{
            return await User.updateOne({_id:user._id},{$set: {
                firstname:user.firstname,
                lastname:user.lastname,
                username:user.username,
                photo:user.photo,
                userstatus:user.userstatus,
                training:user.training
            }});
        }catch(error){
            throw new Error(`Error while updating user: ${error.message}`);
        }
    }
    

    const deleteUser = async(username)=> {
        try{
            return await User.findOneAndDelete({username});
        }catch(error){
            throw new Error(`Error while delete a user: ${error.message}`);
        }
    }



    module.exports = {
        createUser,
        findAllUsers,
        findUserByUsername,
        updateUser,
        deleteUser
    };