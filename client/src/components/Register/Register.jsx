import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from "react-hot-toast";

function Register() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    userstatus: '66e0ae79fedd98da0798d69f',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //const validationErrors = validation(values);
    //setErrors(validationErrors);
   console.log(values);
   
      axios.post('http://localhost:3000/api/auth/signup', values)
        .then(result => {
          console.log(result);
          navigate('/login') 
          toast.success("Succussfully Registered");
        })
        .catch(error => {
          toast.error(error.message);
        });
           
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl border-2 border-gray-200 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center">Welcome to SOLID</h1><br />
        <p className="text-sm font-medium semibold text-center">DRIVING SCHOOL</p>
        <p className="font-medium text-gray-500 text-lg mt-4 text-center">Sign In</p>
        
        <div className="mt-8">
          <label className="text-lg font-medium">First Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Name"
            type="text"
            name="firstname"
            onChange={handleChange}
          />
          {errors.firstname && <span className="text-danger">{errors.firstname}</span>}
        </div>

        <div className="mt-8">
          <label className="text-lg font-medium">Last Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Name"
            type="text"
            name="lastname"
            onChange={handleChange}
          />
          {errors.lastname && <span className="text-danger">{errors.lastname}</span>}
        </div>

        <div className="mt-4">
          <label className="text-lg font-medium">Username</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Email"
            type="email"
            name="username"
            onChange={handleChange}
          />
          {errors.username && <span className="text-danger">{errors.username}</span>}
        </div>

        <div className="mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>

        <div className="mt-8 flex items-center">
          <input
            type="checkbox"
            id="remember"
          />
          <label htmlFor="remember" className="ml-2 font-medium text-base">Remember me</label>
        </div>
        <div className="text-sm font-medium text-center mt-4">
          Already a member? <Link to="/login" className="text-blue-600 hover:text-primary">Log In</Link>
        </div>
        <button type="submit" className="mt-6 w-full px-6 py-2 bg-blue-600 text-white rounded-xl
        hover:bg-primary">
          Register
        </button>
        <Link to="/">
          <button type="submit" className="mt-6 w-full px-6 py-2 bg-white text-blue-600 rounded-medium border-2 rounded border-blue-600
          hover:text-primary hover:border-primary" //onClick={}
          >
            Return to Home Page
          </button>
        </Link>

      </form>
    </div>
  );
}

export default Register;
