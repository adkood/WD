const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res)=>{ 
    res.send("This is homepage of my first express app");
});

app.post("/about", (req,res)=>{
    res.send("this is aboutpage of my first express app");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});