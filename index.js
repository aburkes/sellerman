let Sequelize = require("sequelize");
let userInterface = require("./interface/router.js");

db.Connection.authenticate().then(function(err){
    if(!err){console.log("Successfully connected to database");}
    else{console.log(err);}
});

