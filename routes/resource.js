var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var butterfly_controller = require('../controllers/butterfly'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// butterfly ROUTES /// 
 
// POST request for creating a butterfly.  
router.post('/butterfly', butterfly_controller.butterfly_create_post); 

// delete request for delete a butterfly
router.delete('/butterfly/:id', butterfly_controller.butterfly_delete)
 
// PUT request to update butterfly. 
router.put('/butterfly/:id', 
butterfly_controller.butterfly_update_put); 
 
// GET request for one butterfly. 
router.get('/butterfly/:id', butterfly_controller.butterfly_detail); 
 
// GET request for list of all butterfly items. 
router.get('/butterfly', butterfly_controller.butterfly_list); 
// GET request for one butterfly. 
router.get('/butterfly/:id', butterfly_controller.butterfly_detail); 
 


 
 
module.exports = router;