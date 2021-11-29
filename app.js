const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();

// Enter your desired database name 
// mongoose.connect("mongodb://localhost:27017/<yourDataBase>",
//     {useNewUrlParser: true}).then(()=> {
//     console.log("DATABASE CONNECTED")}).catch(err => {console.log("ERROR", err.message)})

//* main route
app.get("/" , (req, res)=> {
    res.send("RESTFUL API Boilerplate")
})


//? Server Route
app.listen(PORT, (req,res) => {
    console.log(`listening on port ${PORT}`)
})