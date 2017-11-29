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

router.get('/todocomplete/:id', function(req, res, next) {
	console.log("heel")
  //res.render('todocomplete');
});

var db = mongoose.connection;
module.exports = router;