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
/* GET detail butterfly page */ 
router.get('/detail', butterfly_controlers.butterfly_view_one_Page);
/* GET create butterfly page */ 
router.get('/create', butterfly_controlers.butterfly_create_Page); 
/* GET create update page */ 
router.get('/update', butterfly_controlers.butterfly_update_Page); 
/* GET create butterfly page */ 
router.get('/delete', butterfly_controlers.butterfly_delete_Page); 

module.exports = router;