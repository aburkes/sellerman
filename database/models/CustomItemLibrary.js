//list of available customItems

let Sequelize   = require("sequelize"),
db          = require("../connection");

module.exports = db.define("customItemLibaray", {
    customItemID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    priceAsking: {
        type: Sequelize.FLOAT /*, // 'standard price'
        
        get: function(){
            return "$" + this.getDataValue("priceAsking").toFixed(2);
        }
    */
    },
    priceMSRP: Sequelize.FLOAT, 
    priceSale: Sequelize.FLOAT, // 'price on sale'
    PriceMinimum: Sequelize.FLOAT, // minimum price allowed to offer
    priceCost: Sequelize.FLOAT // actual price of item.
})