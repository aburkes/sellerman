let app = require("./setup.js");
let db = require("../database/db.js");


//home page
app.get('/', function(req, res){
    res.render('welcome');
});





// Test for Customer Gets and Sets

// form for new customer
app.get('/manage/customer/new', function(req, res){
    db.Models.transaction(function(t){
        return customer.create
    })
    res.render('set/customer');
});
app.post('/submit/customer', function(req, res){
    db.Customers.create(req.body.customer);
    res.redirect("/")
});

// get single customer
app.get('/manage/customer/:id', function(req, res){
    db.Models.Customers.findById(req.param.id).then(customer => {
        console.log(customer);
        res.render('welcome');
    });
});

app.get('/manage/customer', function(req, res){
    res.render('get/customers', {testvar: db.Models.Customers.findAll()});
});