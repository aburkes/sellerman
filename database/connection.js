var Sequelize = require("sequelize");
let config = require("../config.js");

module.exports = new Sequelize(config.database.name, config.database.user, config.database.pass, config.database.options)