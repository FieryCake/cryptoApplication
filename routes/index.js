var express = require('express');
var router = express.Router(); 
// var test = require('../static/data')
var test = "Lol"



/* GET home page. */
// setTimeout(function() {console.log(test.data)}, 4000);

// router.get('/', function(req, res, next) {
//   setTimeout(function() {res.render('index.html',{data:test.data,lol:"Glenn"} ); }, 4000);
  
// });
router.get('/', function(req, res, next) {
  setTimeout(function() {res.render('index.html',{data:test,lol:"Glenn"} ); }, 1000);
  
});

router.get('/c', function(req, res, next) {
  res.render('contact.html');
});






module.exports = router;
