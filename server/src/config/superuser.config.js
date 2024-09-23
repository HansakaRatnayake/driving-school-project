const User = require('../model/user.model');
const Role = require('../model/role.model');
const UserStatus = require('../model/userstatus.model');

const createSuperUserAdmin = async () => {

    try {

        const role = await Role.findOne({name:"SUPER_ADMIN"});
        const status = await UserStatus.findOne({name:"Active"});


        if(!await User.findOne({role:'66e7b89264fb00056bdbd118'})) {
            const superuser = new User({
                firstname:'Super',
                lastname:'Admin',
                username:'superuseradmin@gmail.com',
                password:'superuseradmin1234',
                canDelete:false,
                userstatus:status._id,
                role:role._id
            }).save(); 
        }
    }catch(err){
        console.error("Error while initiating superuser");

    }
}

module.exports = createSuperUserAdmin;