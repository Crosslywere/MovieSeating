const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");
const flash = require('connect-flash');
const fileUpload  = require('express-fileupload');


const app = express();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"moviebook",
});


//default option
app.use(fileUpload());

// Static files
const publicDirectory = path.join(__dirname,'./public');
const uploadDirectory = path.join(__dirname,'./upload');
app.use(express.static(publicDirectory));
app.use(express.static(uploadDirectory));



// Parse URL - encoded bodiees (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

//For flash messages
app.use(flash());

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
app.use('/upload',require('./routes/upload'));







app.listen(3000);
