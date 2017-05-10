var Sequelize   = require("sequelize");
var db          = require("./database/db.js");
//var connection  = require("./database/connection");
//var orders = require("./database/models/Orders");

// connection.authenticate().then(function(err){
//     if(!err){console.log("connected to database");}
// });

// orders.sync({force: true}).then(function(){
//     return orders.create({
//         
//     })
// })


// var User = db.connection.define("user", {
//     firstName: Sequelize.STRING,
//     lastName: Sequelize.STRING
// });
// 
// User.sync({force: true}).then(function(){
//     return User.create({
//         firstName: "John",
//         lastName: "Smith"
//     });
// }).then(function(){
//     User.findAll().then(function(users){
//         console.log(users);
//     });    
// })
// 
