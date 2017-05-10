let Sequelize   = require("sequelize"),
db              = require("../connection");

module.exports = db.define("relationOrder-Item", {
    orderID: {
        type: Sequelize.INTEGER,
        references: {
            model: "orders",
            key: "orderID"
        },
        allowNull: false
    },
    itemID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "customItems",
            key: "itemID"
        }
    }
});