let app = require("./setup.js");
let db = require("./database/db.js");


//home page
app.get('/', function(req, res){
    res.render('welcome');
});


// Test for Customer Gets and Sets

// form for new customer
app.get('manage/customer/new', function(req, res){
    res.render('set/customer');
});

// get single customer
app.get('manage/customer/:id', function(req, res){
    db.Customers.findById(req.param.id).then(customer => {
        console.log(customer);
        res.render('welcome');
    });
});

