const User = require('../model/user.model');

const createSuperUserAdmin = async () => {

    try {
        if(!await User.findOne({role:'66e7b89264fb00056bdbd118'})) {
            const superuser = new User({
                firstname:'Super',
                lastname:'Admin',
                username:'superuseradmin@gmail.com',
                password:'superuseradmin1234',
                canDelete:false,
                role:'66e7b89264fb00056bdbd118'
            }).save(); 
        }
    }catch(err){
        console.error("Error while initiating superuser");

    }
}

module.exports = createSuperUserAdmin;