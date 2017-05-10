/* REDUNDANT, needs to be deleted.

let Sequelize = require("sequelize");
let db = require("../connection")

module.exports = db.define("Contracts", {
    contractID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    customerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Customers",
            key: "customerID"
        }
    },
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
*/