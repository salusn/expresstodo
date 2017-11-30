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
  res.render('todo');
});

router.post('/todo', function(req, res) {

	var todo = new Todo({
        	taskname : req.body.taskname,
        	complete : 0,
        	delete : 0.
        	});
        todo.save(function(err) {
        	console.log(err)
            res.redirect('/todolist')
        });
});

module.exports = router;
