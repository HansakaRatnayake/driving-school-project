import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Store = () => {
  const [cart, setCart] = useState([]);
  const userId = 'user123';
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);


  // useEffect(() => {
  //   axios.get(`http://localhost:3000/cart/${userId}`)
  //     .then(response => setCart(response.data.items))
  //     .catch(error => console.error('Error fetching cart:', error));
  // }, []);

  useEffect(() =>{
    axios.get(`http://localhost:3000/api/trainings`)
    .then((responce) => {

      const fetchedProduct = responce.data.map(datum => ({
        id:datum._id,
        productName:datum.name,
        price:datum.price,
        productImage:datum.photo,
        duration:datum.duration,
        description:datum.description,
        trainer:datum.trainer.map(t=>t.name)
      }));

      setProducts(fetchedProduct);
    })
    .catch((error) => console.error('Error fetching products:', error));

  },[]);

  // const handleAddToCart = (product) => {
  //   axios.post('http://localhost:3000/cart/add', { userId, product: { ...product, productId: product.id } })
  //     .then(response => setCart(response.data.items))
  //     .catch(error => console.error('Error adding to cart:', error));
  // };

  return (
    <div className="dark:bg-black dark:text-white  py-4  px-56">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-2xl">Lesson Plans</h1>
        <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
          {/* <img src={cartIcon} alt="Cart" className="size-8" /> */}
           <Button color='info' startIcon={ <ShoppingCartOutlinedIcon/>}>Go To Cart</Button>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="relative dark:bg-gray-800 dark:text-white bg-white shadow-md rounded-md overflow-hidden flex justify-center items-center flex-col p-4">
            <img src={`data:image/png;base64,${product.productImage}`} className="w-full h-full object-cover" alt={product.productName} />
  
            <div className="p-4 w-full text-center flex justify-center items-center">
              <div className="w-full flex flex-col justify-start items-center">
                <h5 className="font-semibold text-lg">{product.productName}</h5>
                <p className="text-gray-500">Price: Rs. {product.price}</p>
              </div>
              <div className="w-full flex justify-end items-center">
                  <Button onClick={() => handleAddToCart(product)} className='h-12' variant="contained" startIcon={<AddShoppingCartOutlinedIcon />}>
                  Add To Cart
                  </Button>
              </div>
            </div>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
