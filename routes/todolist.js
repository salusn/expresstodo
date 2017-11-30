// jshint ignore: start
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/todo');
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/todo", {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

var db = mongoose.connection;

router.get('/todolist', function(req, res, next) {
	Todo.find(function(err, todos) {
            res.render('todolist', { tasks: todos });
        });
	
});


module.exports = router;