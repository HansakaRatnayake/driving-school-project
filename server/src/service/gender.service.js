const genderRepo = require('../repository/gender.repository');
const {findAllGenders} = genderRepo;


const findAll = () => findAllGenders();


module.exports = {
    findAllGenders
}