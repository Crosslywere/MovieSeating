const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const flash = require('connect-flash');
const fileUpload  = require('express-fileupload');


const DBconnection = require("./database/connection");
const app = express();

//Set port
dotenv.config({path:'.env'})
const PORT = process.env.PORT || 5000;

//Mongo Connection
DBconnection();

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

// Set view Engine - ours is hbs
app.set('view engine', 'hbs');


// ------------------------------------------------------------

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/upload',require('./routes/upload'));




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;