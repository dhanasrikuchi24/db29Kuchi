/*
var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('butterfly', { title: 'Search results butterfly' });
});

module.exports = router;
*/

var express = require('express'); 
const butterfly_controlers= require('../controllers/butterfly'); 
var router = express.Router(); 
 
/* GET butterflys */ 
router.get('/', butterfly_controlers.butterfly_view_all_Page ); 
module.exports = router; 