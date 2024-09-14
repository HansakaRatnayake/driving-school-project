const express = require('express');
const cartController = require('../controller/cart.controller');
const {saveCart,findAllCarts,updateCart,deleteCart} = cartController;

 
const router = express.Router();


router.get('/',findAllCarts);
router.post('/', saveCart);
router.delete('/:cartId', deleteCart);




module.exports = router;