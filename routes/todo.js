// jshint ignore: start
var express = require('express');
var router = express.Router();
//var Todo = require('../models/todo');
var mongoose = require('mongoose');
var Todo = require('../models/todo');
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/todo", {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

var db = mongoose.connection;



router.get('/todo', function(req, res, next) {
  res.render('todo', { title: 'Add New Task Here' });
});

router.post('/todo', function(req, res) {

	var todo = new Todo({
        	taskname : req.body.taskname,
        	});
console.log(todo)
        todo.save(function(err) {
        	console.log(err)
            res.redirect('/')
        });
});

module.exports = router;
