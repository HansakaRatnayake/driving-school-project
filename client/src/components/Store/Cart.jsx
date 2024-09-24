// Cart.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";

const CartUrl = 'http://localhost:3000/api/cart';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const loggeduser = JSON.parse(localStorage.getItem("auth_user")); // Get logged user info
    const userId = loggeduser?._id;
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:3000/api/trainings`)
            .then((responce) => {
                setTrainings(responce.data);
            }).catch(err =>{
            console.log("Error : " + err);
        })

        axios.get(`${CartUrl}?user=${userId}`)
            .then(response => {
                setCart(response.data)
            })
            .catch(error => {
                toast.error("Error Fetching Cart");
                console.error('Error fetching cart:', error)
            });
    }, []);

    const handleRemoveFromCart = (itemId) => {
        axios.delete('http://localhost:3000/api/cart/'+itemId)
            .then(() => {
                toast.success("Training Successfully Removed")
                window.location.reload();
            })
            .catch(error => {
                toast.error('Error removing from cart');
                console.error('Error removing from cart:', error);
            });
    };

    const totalPrice = cart.reduce((total, item) => {
        const training = trainings.find(t => t._id === item?.training[0]?._id);
        return total + (training?.price || 0);
    }, 0);

    return (
        <div className="p-4">
            <div className="container mx-auto p-4">
                <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <div className="p-4 text-center text-gray-600">No items added.</div>
                ) : (
                    <>
                        <ul className="p-4">
                            {cart.map((item, i) => {
                                const training = trainings.find(t => t._id === item?.training[0]?._id); // Find the matching training object
                                return (
                                    <li key={i} className="flex items-center mb-2">
                                        <img src={`data:image/png;base64,${training?.photo}`} alt=""
                                             className="w-12 h-12 object-cover mr-2"/>
                                        {training?.name} - Rs. {training?.price}

                                        <button className="ml-2 text-red-500"
                                                onClick={() => handleRemoveFromCart(item._id)}>
                                            Remove
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="p-4 text-center font-bold">Total: {totalPrice}</div>
                    </>
                )}
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => navigate('/storepage')}
                >
                    Back to Store
                </button>
            </div>
        </div>
    );
};

export default Cart;
