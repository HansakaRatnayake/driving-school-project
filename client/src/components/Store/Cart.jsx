// Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const userId = 'user123'; // Simulate user ID; replace with actual user ID if authentication is implemented.
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/cart/${userId}`)
      .then(response => setCart(response.data.items))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const handleRemoveFromCart = (productId) => {
    axios.post('http://localhost:3000/cart/remove', { userId, productId })
      .then(response => setCart(response.data.items))
      .catch(error => console.error('Error removing from cart:', error));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="p-4 text-center text-gray-600">No items added.</div>
      ) : (
        <>
          <ul className="p-4">
            {cart.map((item) => (
              <li key={item.productId} className="flex items-center mb-2">
                <img src={item.productImage} alt="" className="w-12 h-12 object-cover mr-2" />
                {item.name} - Rs. {item.price} (x{item.quantity})
                <button className="ml-2 text-red-500" onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="p-4 text-center font-bold">Total: Rs. {totalPrice}</div>
        </>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => navigate('/storepage')}
      >
        Back to Store
      </button>
    </div>
  );
};

export default Cart;
