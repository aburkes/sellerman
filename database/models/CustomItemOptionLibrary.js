//list of available customItemOptions

let Sequelize   = require("sequelize"),
db          = require("../connection");

module.exports = db.define("customItemOptionLibaray", {
    customItemOptionID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    priceAsking: Sequelize.FLOAT, // 'standard price'
    priceMSRP: Sequelize.FLOAT, 
    priceSale: Sequelize.FLOAT, // 'price on sale'
    PriceMinimum: Sequelize.FLOAT, // minimum price allowed to offer
    priceCost: Sequelize.FLOAT // actual price of item.
})