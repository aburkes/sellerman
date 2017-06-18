let db = require("../connection.js");
let Models = {
	Customers: require("./Customers"),
	Orders: require("./Orders"),
	CustomItemLibrary: require("./CustomItemLibrary"),
	CustomItemOptionLibrary: require("./CustomItemOptionLibrary"),
	CustomItems: require("./CustomItems"),
	CustomItemOptions: require("./CustomItemOptions"),
//	RelationOrderItem: require("./RelationOrder-Item"),
	Users: require("./Users")
};

db.sync().then(function(){ module.exports = Models; });