const Cart = require('../model/cart.model');
const cartRepo = require('../repository/cart.repository');
const {createCart,findAllCarts,deleteCart} = cartRepo;

 
const create = async (cart) => {

    try{
        const resData = await createCart(cart);
        return {
            data:"Successfully Added to Cart",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Cart Adding Error",
            statuscode:500
           }
    }
}

const findAll = async (queryparamobject) => {

    const {training} = queryparamobject;

    const query = {};

    if(training && training.trim() !== '') query.training = { $regex: training, $options: 'i' };
 

    try{
        const resData = await findAllCarts(query);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching carts: "+err.message,
            statuscode:500
           }
    }

}


const remove = async (cartId) => {

    try{
        if(!await Cart.findOne({_id:cartId})) return {
            data:"Triner Not Found, Input a valid cart",
            statuscode:404
        }
        const resData = await deleteCart(cartId);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting carts: "+err.message,
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll,
    remove
}