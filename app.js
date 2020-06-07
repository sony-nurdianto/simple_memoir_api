var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
const mongoose = require("mongoose");
var cors = require("cors"); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/Users');
var postRouter = require('./routes/Post')

var app = express();
mongoose.connect('mongodb://localhost/simple-memoir', {   
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post',postRouter)

module.exports = app;
