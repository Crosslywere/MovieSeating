
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"moviebook",
});

connection.connect( (error) =>{
    if(error){
        console.log(error);
    } else{
        console.log("Mysql Database connected");
    }
})

module.exports = connection;

