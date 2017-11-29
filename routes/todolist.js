// jshint ignore: start
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todo';

router.get('/todolist', function(req, res, next) {
 // res.render('todolist', { title: 'ALl Tasks Here' });
  MongoClient.connect(url, function(err, db) {
  	console.log("dd")
		var collection = db.collection('todotasks');		
				db.collection('todotasks').find().toArray(function(err, docs){
       			res.render('todolist',{ tasks: docs });
    			});
	});	
});


module.exports = router;