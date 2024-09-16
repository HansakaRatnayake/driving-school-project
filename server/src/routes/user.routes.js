const express = require('express');
const userController = require('../controller/user.controller');
const authenticate = require('../middleware/auth.middleware');
const permission = require('../middleware/permisson.middleware');
const {saveUser,findAllUsers,updateUser,deleteUser} = userController;

 
const router = express.Router();

//define routes

router.get('/', findAllUsers);
router.post('/',  saveUser);
router.put('/',  updateUser);
router.delete('/:username', deleteUser);

// router.get('/', authenticate, permission('users:READ'), findAllUsers);
// router.post('/', authenticate, permission('users:CREATE'),  saveUser);
// router.put('/', authenticate, permission('users:UPDATE'),  updateUser);
// router.delete('/:username', authenticate, permission('users:DELETE'),  deleteUser);


module.exports = router;