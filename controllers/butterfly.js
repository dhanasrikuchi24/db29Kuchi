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
    // GET request for one butterfly. 
}; 

 // Handle a show one view with id specified by query 
 exports.butterfly_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await butterfly.findById( req.query.id) 
        res.render('butterflydetail',  { title: 'butterfly Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a butterfly. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.butterfly_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('butterflycreate', { title: 'butterfly Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a butterfly. 
// query provides the id 
exports.butterfly_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await butterfly.findById(req.query.id) 
        res.render('butterflyupdate', { title: 'butterfly Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.butterfly_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await butterfly.findById(req.query.id) 
        res.render('butterflydelete', { title: 'butterfly Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 