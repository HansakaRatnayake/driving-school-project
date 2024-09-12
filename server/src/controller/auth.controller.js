const User = require('../model/user.model');
const bcrypt = require("bcryptjs");
const {generateToken} = require("../utils/generateToken.js");

const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordValid = await bcrypt.compare(
            password,
            user?.password || ""
        );

        if(!user || !isPasswordValid){
            return res.status(400).json({error: "Invalid Username of Password"});
        }

        const token = generateToken(user._id,res);

        res.status(200).json({
            token,
            _id:user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            photo: user.photo,
        });
    }catch(error){
        console.log("Error in Login Controller",error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const signup = async(req,res) => {
    try{

        const { firstname,lastname,username,password,userstatus } = req.body;

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstname,
            lastname,
            username,
            password: hashedPassword,
            userstatus,
            photo: "aaa",
        });

        if(newUser){
            console.log(newUser._id);
            
            const token = generateToken(newUser._id,res);
            await newUser.save();

            res.status(200).json({
                token,
                _id:newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                username: newUser.username,
                photo: newUser.photo,
            });
        }else {
            res.status(400).json({ error: "Invalid user data" });
          }

    }catch(error){
        console.log("Error in Signup Controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

module.exports = {login,signup};