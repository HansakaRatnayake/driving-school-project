const express = require('express');
const cartController = require('../controller/cart.controller');
const {saveCart,findAllCarts,updateCart,deleteCart} = cartController;

 
const router = express.Router();


router.get('/', authenticate, permission('cart:READ'),findAllCarts);
router.post('/', authenticate, permission('cart:CREATE'), saveCart);
router.delete('/:cartId', authenticate, permission('cart:DELETE'), deleteCart);




module.exports = router;