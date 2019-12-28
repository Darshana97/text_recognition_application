const express = require('express');

const app = express();

const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', 'true' );
mongoose.connect('mongodb://localhost:27017/ocr_application', {useNewUrlParser: true});
const User = require('../models/user');
const Image = require('../models/img');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // console.log('Connected dude!');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.get("/api/user", (req, res, next) => {
    console.log(req.query);
    // console.log(req.query.user_name);
    User.findOne({user_name: req.query.user_name, password: req.query.password}).then(user=>{
        res.json({message: "SUCCESS!", user: user});
    });
});

app.get("/api/image", (req,res,next)=>{

    Image.find().then(image=>{
        res.json(image);
    })

})

module.exports = app;