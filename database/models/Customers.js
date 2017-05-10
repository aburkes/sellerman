var Sequelize = require("sequelize");
var db = require("../connection");

let Customers = db.define('customers', {
    customerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameFirst: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nameLast: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phonePrimary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    phoneAlternate: Sequelize.INTEGER,
    addressStreet: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressCity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressState: {
        type: Sequelize.STRING(2),
        allowNull: false,
        default: "CA"
    },
    addressPostalCode: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Customers;