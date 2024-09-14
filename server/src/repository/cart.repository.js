const Cart = require('../model/cart.model');

 
     const createCart = async (cart) => {
        
        try{

            const newCart = new Cart(cart);
            return await newCart.save();

        }catch(error){
            throw new Error(`Error  while creating a cart: ${error.message}`);
        }

    }


     const findAllCarts = async(searchQuery) => {
        try{

            return await Cart.find(searchQuery).exec();

        }catch(error){
            
            throw new Error(`Error while fetching carts: ${error.message}`);
        }
    }


    const deleteCart = async (cartId) => {
        try{
         
            return await Cart.findByIdAndDelete(cartId);

        }catch(error){
            throw new Error(`Error while deleting cart: ${error.message}`);
        }
    }


    module.exports = {createCart,findAllCarts,deleteCart};