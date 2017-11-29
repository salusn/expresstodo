// jshint ignore: start
var express = require('express');
var router = express.Router();

router.get('/todo', function(req, res, next) {
  res.render('todo', { title: 'todo' });
});

router.post('/todo', function(req, res) {
	
});

module.exports = router;