let Sequelize   = require("sequelize"),
db              = require("../connection"),
config          = require("../../config"),
customers       = require("./Customers");
    
module.exports = db.define("orders", {
    orderID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
//    itemID: {
//        type: Sequelize.INTEGER,
//        references: {
//            model: "customItems",
//            key: "itemID"
//        }
//    },
    customerID: {
        type: Sequelize.INTEGER,
        column: {
            references: {
                model: "customers",
                key: "customerID"
            }
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
    },
    taxRate: {
        type: Sequelize.FLOAT,
        default: config.taxRate,
        allowNull: false
    },
    price: { // total of all items at time of purchase
        type: Sequelize.FLOAT,
        allowNull: false
    },
    cost: { // total cost of goods at time of transaction
        type: Sequelize.FLOAT,
        allowNull: false
    },
    labor: Sequelize.FLOAT,
    delivery: Sequelize.FLOAT,
    subTotal: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    salesTax: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    paid: {
        type: Sequelize.FLOAT,
        default: 0.00
    }
});