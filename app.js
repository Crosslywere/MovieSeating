const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");


const app = express();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"moviebook",
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect( (error) =>{
    if(error){
        console.log(error);
    } else{
        console.log("Mysql connected");
    }
})

// ------------------------------------------------------------

//Routes
app.get("/",(req,res) =>{
    res.render("index");
});







app.listen(3000);
