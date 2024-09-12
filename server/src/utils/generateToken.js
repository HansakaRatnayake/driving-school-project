const jwt = require("jsonwebtoken");

const generateToken = (userId,res) => {
    return jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "15d",
    });
};

module.exports = { generateToken };