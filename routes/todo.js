// jshint ignore: start
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todo';

router.get('/todo', function(req, res, next) { 
  res.render('todo', { title: 'Add New Task Here' });
});

router.post('/todo', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		var collection = db.collection('todotasks');
		var todotask = req.body.todotask;		
		collection.insert({todotask: todotask}, function(err, result) {
			res.redirect('todolist');		    	
		})
	});	 
	
});

module.exports = router;