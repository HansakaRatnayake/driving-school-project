const express = require('express');
const cors = require('cors');

const trainerRoutes = require('./routes/trainer.routes');
const genderRoutes = require('./routes/gender.routes');



const app = express();
app.use(cors());
app.use(express.json());


// app.use('/api', (req,res,next) => {
    
//     next();
// });


app.use('/api/trainers',trainerRoutes);
// app.use('/api/genders',genderRoutes);


module.exports = app;
