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

// Parse URL - encoded bodiees (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

// View Engine - ours is hbs
app.set('view engine', 'hbs');

db.connect( (error) =>{
    if(error){
        console.log(error);
    } else{
        console.log("Mysql connected");
    }
})

// ------------------------------------------------------------

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));







app.listen(3000);
