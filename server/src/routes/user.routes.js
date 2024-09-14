const express = require('express');
const userController = require('../controller/user.controller');
const {saveUser,findAllUsers,updateUser,deleteUser} = userController;

 
const router = express.Router();

//define routes
router.get('/',findAllUsers);
router.post('/', saveUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;