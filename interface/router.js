let app = require("./setup.js");

//home page
app.get('/', function(req, res){
    res.render('welcome');
})
