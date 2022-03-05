const express = require("express");

const app=express();

app.get("/books", function(req,res){
    const arr = [
        { book1: "Wings with fire", author: "DR.APJ ABDUL KALAM" },
        { book2: "7habits of highly effective people", author: "STEVEN COVEY" },
        { book3: "Awekning India", author: "Anurag Joshi" },
        { book4: "Attitude is everything", author: "Jeff keller" },
      ];
    res.send(arr);
});
app.listen(4000, ()=>{
    console.log("Listening on port 4000");
});