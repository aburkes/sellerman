/* redundant, needs to be deleted.
let Sequelize   = require("sequelize"),
db          = require("../connection");

module.exports = db.define("relationItem-Option", {
    itemID: {
        references: {
            model: "customItems",
            key: "itemID"
        }
    },
    optionID: {
        references: {
            model: "customItemOptions",
            key: "optionID"
        }
    }
});
*/