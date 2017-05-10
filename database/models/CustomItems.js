let Sequelize   = require("sequelize"),
    db          = require("../connection");

module.exports = db.define("customItems", {
    itemID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contractID: {
        type: Sequelize.INTEGER,
        references: {
            model: "contracts",
            key: "contractID"
        }
    },
    customItemID: {
        type: Sequelize.INTEGER,
        references: {
            model: "customItemLibrary",
            key: "customItemID"
        }
    },
    price: { //price charged for the base item.
        type: Sequelize.FLOAT,
        allowNull: false
    },
    cost: { // cost at time of purchase
        type: Sequelize.FLOAT,
        allowNull: false
    },
    comment: Sequelize.STRING
});