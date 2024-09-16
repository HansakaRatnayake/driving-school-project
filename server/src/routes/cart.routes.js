const express = require('express');
const cartController = require('../controller/cart.controller');
const {saveCart,findAllCarts,updateCart,deleteCart} = cartController;
const authenticate = require('../middleware/auth.middleware');
const permission = require('../middleware/permisson.middleware');

 
const router = express.Router();


router.get('/', findAllCarts);
router.post('/',  saveCart);
router.delete('/:cartId', deleteCart);

// router.get('/', authenticate, permission('cart:READ'),findAllCarts);
// router.post('/', authenticate, permission('cart:CREATE'), saveCart);
// router.delete('/:cartId', authenticate, permission('cart:DELETE'), deleteCart);




module.exports = router;