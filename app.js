'use strict'

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();
const port = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors())

app.get('/intersections',function(req,res){
  var obj = JSON.parse(fs.readFileSync('intersections.json', 'utf8'));
  res.send(obj)
})

app.get('/walkside',function(req,res){
  var obj = JSON.parse(fs.readFileSync('walkside.json', 'utf8'));
  res.send(obj)
})

app.listen(port);
