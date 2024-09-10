const userRepo = require('../repository/user.repository');
const { createUser, findAllUsers, findUserByUsername } = userRepo;


const create = async (user) => {

    try {
        const resData = await createUser(user);
        return {
            data: "User Successfully Registerd",
            statuscode: 201
        }
    } catch (err) {
        return {
            data: "User Registraion Error",
            statuscode: 500
        }
    }
}

const findAll = async () => {

    try {
        const resData = await findUserByUsername();
        return {
            data: resData,
            statuscode: 200
        }

    } catch (err) {
        return {
            data: "Error while fetching Users",
            statuscode: 500
        }
    }

}

const findByUsername = async (username) => {
    try {
        const resData = await findAllUsers(username);
        return {
            data: resData,
            statuscode: 200
        }
    } catch (err) {
        return {
            data: "Error while fetching Users",
            statuscode: 500
        }
    }
}

module.exports = {
    create,
    findAll,
    findByUsername
}