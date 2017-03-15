//Require express and mongodb client
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var logger = require('morgan');

var mongoUrl = 'mongodb://localhost:27017/cognitiv_db';
var router = require('./routes');

//Use it once as sample data
//var db = require('./db');

mongoose.connect(mongoUrl);

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");
 
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

 
router(app);
