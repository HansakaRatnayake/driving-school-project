const express = require('express');

const app = express();
app.use(express.json());

app.get("/hello",(req,res)=>{
    res.send("Hello World");
})

app.post("/user",(req,res)=>{

    const {username,password} = req.body;
    console.log(username);
    console.log(password);
    
 
})

const PORT = 3000;

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});