// jshint ignore: start
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var Todo = require('./models/todo');
mongoose.Promise = Promise;

var index = require('./routes/index');
var login = require('./routes/login');
var todo = require('./routes/todo');
var todolist = require('./routes/todolist');
var todocomplete = require('./routes/todocomplete');
var tododelete = require('./routes/tododelete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  resave: false,
  saveUninitialized: true,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  secure: true,
}));
app.use(flash()); 

var router = express.Router();

app.use('/', index);
app.get('/login', login);
app.post('/login', login);
app.get('/todo', todo);
app.get('/todolist', todolist);
app.post('/todo', todo);
app.get('/todocomplete/:id', todocomplete);
app.get('/tododelete/:id', tododelete);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
