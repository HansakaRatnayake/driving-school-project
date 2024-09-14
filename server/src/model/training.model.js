const mongoose = require('mongoose');
const User = require('./user.model');

const trainingSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    duration:{
        type:Number,
        required:true,
        trim:true
    },
    image:{
        type:Buffer,
        default:""
    },
    trainer:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trainer",
        required:true

    }]

});

trainingSchema.post('findOneAndDelete', async function(training) {
    console.log('helloo');
    
    if(training){
        try{
           await User.updateMany(
            {training:training._id},
            {$pull:{training:training._id}}
         );
        }catch(err){
            console.error('Error removing training references from users:', err);
        }
    }
});



const Training = mongoose.model("Training",trainingSchema);

module.exports = Training;