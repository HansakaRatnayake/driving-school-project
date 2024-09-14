const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({



    createddate:{
        type: Date,
         default: Date.now 
    },
    bookingdate:{
        type:Date
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    trainer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trainer",
        required:true

    }

});




const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;