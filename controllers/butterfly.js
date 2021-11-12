var butterfly = require('../models/butterfly'); 
 
// List of all butterflys 
exports.butterfly_list = async function(req, res) { 
    try{ 
        thebutterfly = await butterfly.find(); 
        res.send(thebutterfly); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific butterfly. 
exports.butterfly_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly detail: ' + req.params.id); 
}; 
 
// Handle butterfly create on POST. 
exports.butterfly_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new butterfly(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"butterfly_type":"goat", "cost":12, "size":"large"} 
    document.Brand = req.body.Brand; 
    document.price = req.body.price; 
    document.color = req.body.color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle butterfly delete form on DELETE. 
exports.butterfly_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly delete DELETE ' + req.params.id); 
}; 
 
// Handle butterfly update form on PUT. 
exports.butterfly_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.butterfly_view_all_Page = async function(req, res) { 
    try{ 
        thebutterfly = await butterfly.find(); 
        res.render('butterfly', { title: 'Butterfly Search Results', results: thebutterfly }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
    // GET request for one costume. 
}; 