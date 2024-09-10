const User = require('../model/user.model');

const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username });
    
        if(user){
            console.log("Hello");
            res.status(200).json({user});
            
        }
    }catch(error){
        console.log(error);
        
    }
}

module.exports = {login};