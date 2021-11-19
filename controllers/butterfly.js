var butterfly = require('../models/butterfly'); 
 
// Handle butterfly delete form on DELETE. 
exports.butterfly_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
        try { 
            result = await butterfly.findByIdAndDelete( req.params.id) 
            console.log("Removed " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": Error deleting ${err}}`); 
        } 
}; 
 



//VIEWS 
// Handle a show all view 
exports.butterfly_view_all_Page = async function(req, res) { 
    try{ 
        thebutterfly = await butterfly.find(); 
        res.render('butterfly', { title: 'butterfly Search Results', results: thebutterfly }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// List of all butterfly 
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

//Handle butterfly create on POST. 
exports.butterfly_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new butterfly(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"butterfly_type":"goat", "cost":12, "size":"large"} 
    document.Brand = req.body.Brand; 
    document.cost = req.body.cost; 
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

// for a specific butterfly. 
exports.butterfly_detail = async function(req, res) { 
    console.log("details"  + req.params.id) 
    try { 
        result = await butterfly.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.butterfly_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await butterfly.findById( req.query.id) 
        res.render('butterflydetails',  
{ title: 'butterfly Detail', toShow: result }); 
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

// Handle butterfly update form on PUT. 
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