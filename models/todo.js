// jshint ignore: start
var express    = require('express');
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TodoSchema   = new Schema({
    taskname: String,
});

module.exports = mongoose.model('Todo', TodoSchema);