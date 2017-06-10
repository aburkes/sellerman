var Sequelize   = require("sequelize");
var db          = require("./database/db.js");
var interface   = require("./interface/router.js");

db.Connection.authenticate().then(function(err){
    if(!err){console.log("Successfully connected to database");}
    else{console.log(err);}
})

