const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:Buffer,
        default:"",
    },
    userstatus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserStatus",
        default:"66e41c9efd8cf9b5783215b7"
        
    },
    training:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Training"
    }],
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    }

});


// Pre-save hook for password hashing (for new user creation)
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Pre-update hook for password hashing (when updating the password)
userSchema.pre('updateOne', async function (next) {
    const update = this.getUpdate();

    // Check if the password field is being updated
    if (update.password) {
        update.password = await bcrypt.hash(update.password, 12);
    }

    next();
});

const User = mongoose.model("User",userSchema);

module.exports = User;