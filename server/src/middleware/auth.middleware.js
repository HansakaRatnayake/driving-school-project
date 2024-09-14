import jwt from "jsonwebtoken";
import User from "../model/user.model";

const protect = async(req, res, next) => {

    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({error:"Unauthorized - No Token Provided"});
        
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decoded) return res.status(401).json({error: "Unauthorized - Invalid Token" });

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) return res.status(404).json({error: "User Not Found"});
    
        req.user = user;
        next();

    }catch(error){
        console.log("Error occured in ProtectedRoute:",error);
        res.status(500).json({error: "Internal Server Error"});        
    }
};

export default protect;
