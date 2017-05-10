let Sequelize   = require("sequelize"),
db          = require("../connection");

module.exports = db.define("customItemOptions", {
    optionID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    itemID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "customItems",
            key: "itemID"
        }
    },
    orderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "orders",
            key: "orderID"
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    cost: Sequelize.FLOAT // cost at time of purchase
});
