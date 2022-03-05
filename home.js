const express = require("express");

const app=express();

app.get("/home", function(req,res){
    // console.log("Hello");
    res.send("Hello")
});
app.listen(4000, ()=>{
    console.log("Listening on port 4000");
});