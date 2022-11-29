// Imports
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');

//Import databse and create connection
const mysql = require("mysql");
const { errorMonitor } = require('events');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"moviebook",
});



exports.register = (req, res) =>{
    console.log(req.body);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    // Destructuring
    // const {first_name, last_name, email, password,cpassword} = req.body;

    db.query('SELECT email FROM users WHERE email = ?',[email], async(error,results)=>{
        if(error){
            console.log(error);
        }

        // Email in use
        if(results.length > 0){
            return res.render('register', {
                message: "Email already in use",
            });
        } 
        //password not the same
        else if( password !== cpassword){
            return res.render('register', {
                message: "Password not found",
            });
        }

        // Encrypt password
        let password_hash = await bcrypt.hash(password,8);

        console.log(password_hash);

        db.query('INSERT INTO users SET ?', {first_name:fname, last_name:lname, email:email, password:password_hash}, (error,results)=>{
            if(error){
                console.log(error);
            }else{

                //print results in console
                // console.log(results);
                return res.redirect('/home');
            }
        });

    });



}