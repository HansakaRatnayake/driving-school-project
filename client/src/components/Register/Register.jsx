import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
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
    const validationErrors = validation(values);
    setErrors(validationErrors);
   
      axios.post('http://localhost:3000/register', values)
        .then(result => {
          console.log(result);
          navigate('/login') });
          alert("Registraion Succuessful")
       
          
        
    
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl border-2 border-gray-200 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center">Welcome to SOLID</h1><br />
        <p className="text-sm font-medium semibold text-center">DRIVING SCHOOL</p>
        <p className="font-medium text-gray-500 text-lg mt-4 text-center">Sign In</p>
        <div className="mt-8">
          <label className="text-lg font-medium">Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Name"
            type="text"
            name="name"
            onChange={handleChange}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>

        <div className="mt-4">
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
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
