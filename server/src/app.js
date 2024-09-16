const express = require('express');
const cors = require('cors');

const contactusRoutes = require('./routes/contactus.routes ');
const trainerRoutes = require('./routes/trainer.routes');
const trainingRoutes = require('./routes/training.routes ');
const genderRoutes = require('./routes/gender.routes');
const userstatusRoutes = require('./routes/userstatus.routes');
const usersRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const bookingRoutes = require('./routes/booking.routes');
const cartRoutes = require('./routes/cart.routes');






const app = express();
app.use(cors());
app.use(express.json());


// app.use('/api', (req,res,next) => {
    
//     next();
// });

//Middlewares
app.use('/api/cart', cartRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contactus', contactusRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/trainings', trainingRoutes);
app.use('/api/genders', genderRoutes);
app.use('/api/userstatuses', userstatusRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
