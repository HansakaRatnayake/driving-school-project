const express = require('express');
const cors = require('cors');

const trainerRoutes = require('./routes/trainer.routes');
const genderRoutes = require('./routes/gender.routes');
const userstatusRoutes = require('./routes/userstatus.routes');
const usersRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');



const app = express();
app.use(cors());
app.use(express.json());


// app.use('/api', (req,res,next) => {
    
//     next();
// });

//Middlewares
app.use('/api/trainers',trainerRoutes);
app.use('/api/genders',genderRoutes);
app.use('/api/userstatuses',userstatusRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/auth',authRoutes);


module.exports = app;
