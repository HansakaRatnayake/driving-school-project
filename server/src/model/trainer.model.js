const mongoose = require('mongoose');
const Gender = require('./gender.model')

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
        type:Number,
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
        
    },
    gender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Gender",
        required: true
    }

})

const Trainer = mongoose.model("Trainer",trainerSchema);

module.exports = Trainer;