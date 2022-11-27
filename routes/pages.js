const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/admin', (req,res)=>{
    res.render('admin/index');
});

router.get('/home', (req,res)=>{
    res.render('web');
});

router.get('/login', (req,res)=>{
    res.render('login');
});

router.get('/register', (req,res)=>{
    res.render('register');
});


module.exports = router;