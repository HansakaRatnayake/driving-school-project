// Booking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import product1 from './assets/1.webp';
import product2 from './assets/2.png';
import product3 from './assets/3.png';
import product4 from './assets/4.png';
import product5 from './assets/5.png';
import product6 from './assets/6.jpg';
import cartIcon from './assets/cart.png';

const PRODUCTS = [
  { id: 1, productName: "Motorcycle Training", price: 20000, productImage: product1 },
  { id: 2, productName: "Manual Vehicle Training", price: 27000, productImage: product2 },
  { id: 3, productName: "Auto Car Training", price: 25000, productImage: product3 },
  { id: 4, productName: "Heavy Vehicle Training", price: 29000, productImage: product4 },
  { id: 5, productName: "Scooter Training", price: 17000, productImage: product5 },
  { id: 6, productName: "Three Wheel Training", price: 19000, productImage: product6 },
];

const Store = () => {
  const [cart, setCart] = useState([]);
  const userId = 'user123';
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/cart/${userId}`)
      .then(response => setCart(response.data.items))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const handleAddToCart = (product) => {
    axios.post('http://localhost:3000/cart/add', { userId, product: { ...product, productId: product.id } })
      .then(response => setCart(response.data.items))
      .catch(error => console.error('Error adding to cart:', error));
  };

  return (
    <div className="dark:bg-black dark:text-white  p-4">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-2xl">Lesson Plan</h1>
        <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
          {/* <img src={cartIcon} alt="Cart" className="size-8" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>

          {cart.length > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="relative dark:bg-gray-800 dark:text-white bg-white shadow-xl rounded-lg overflow-hidden">
            <img src={product.productImage} className="w-full h-48 object-cover" alt={product.productName} />
            <button
              className="absolute hover:scale-125 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 rounded-full text-white bg-blue-600"
              onClick={() => handleAddToCart(product)}
            >
              Add Lesson
            </button>
            <div className="p-4 text-center">
              <h5 className="font-semibold text-lg">{product.productName}</h5>
              <p className="text-gray-500">Price: Rs. {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
