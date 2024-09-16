const mongoose = require('mongoose');
const Training = require('./training.model');


const trainerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    nic:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    yoexperience:{
        type:Number,
        required:true,
        trim:true,
    },
    profileimage:{
        type:Buffer,
        default:""
        
    },
    gender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Gender",
        required: true
    },
    booking:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        unique:true
    }]

})

trainerSchema.post('findOneAndDelete', async function(trainer) {
    if(trainer){
        try{
            await Training.updateMany(
            {trainer:trainer._id},
            {$pull:{trainer:trainer._id}}
         )
         .then(data => {
            console.log(data)
        });
    
        }catch(err){
            console.error('Error removing trainer references from trainings:', err);
        }
    }
});



const Trainer = mongoose.model("Trainer",trainerSchema);

module.exports = Trainer;