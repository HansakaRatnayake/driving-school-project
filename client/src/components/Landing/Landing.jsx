import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from "./Assets/a.avif";
import {Link} from "react-router-dom"; // Updated with the new image path


const Landing = () => {
  return (
    <div className="relative h-[calc(100vh-76px)] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="object-cover w-full h-full"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center text-center text-white p-6">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to SOLID
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Start your driving lessons with SOLID Learners. For more information on our courses and to book lessons, call us!
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/home">Get Started</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
