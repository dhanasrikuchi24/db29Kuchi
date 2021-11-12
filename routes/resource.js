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
router.post('/resource/butterfly', butterfly_controller.butterfly_create_post); 
 
// DELETE request to delete butterfly. 
router.delete('/resource/butterfly/:id', butterfly_controller.butterfly_delete); 
 
// PUT request to update butterfly. 
router.put('/resource/butterfly/:id', 
butterfly_controller.butterfly_update_put); 
 
// GET request for one butterfly. 
router.get('/resource/butterfly/:id', butterfly_controller.butterfly_detail); 
 
// GET request for list of all butterfly items. 
router.get('/resource/butterfly', butterfly_controller.butterfly_list);
router.get('/butterflys/:id', butterfly_controller.butterfly_detail);   
// for a specific butterfly. 
exports.butterfly_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await butterfly.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
//Handle butterfly update form on PUT. 
exports.butterfly_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await butterfly.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.butterfly_type)  
               toUpdate.butterfly_type = req.body.butterfly_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
    if(req.body.checkboxsale) toUpdate.sale = true; 
else toUpdate.same = false; 
 
}; 
 
module.exports = router; 