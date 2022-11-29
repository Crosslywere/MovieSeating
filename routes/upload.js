const express = require('express');

const router = express.Router();
//Import databse and create connection
const mysql = require("mysql");
const { errorMonitor } = require('events');
const { response } = require('express');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"moviebook",
});







module.exports = router;