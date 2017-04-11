var express = require('express');
var path = require('path');
var logger = require('bole');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../public')));

app.use(require('./site/router'))
app.use('/api', require('./patients/router'))

// catch 404 and forward to error handler
app.use(require('./errors/not-found'))

module.exports = app;
