const mongoose = require('mongoose');


const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true    
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error connecting to MongoDB", error.message);
    }
  };


  module.exports = connectToMongoDB;