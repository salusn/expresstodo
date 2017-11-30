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

router.get('/tododelete/:id', function(req, res, next) {
    
        Todo.findById(req.params.id, (err, todo) => {  
        console.log("del")
        console.log(todo)
        todo.delete = 1;

        todo.save((err, todo) => {
            if (err) {
                console.log(err)
            }
        });
        res.redirect('/todolist')
    });
});

module.exports = router;