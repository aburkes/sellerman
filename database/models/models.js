// This just compiles all the models together.
// If you ever need more models, add them to this export.

//let Models = {customers: require("./Customers")};


module.exports = {
//	customers: require("./Customers"),
	orders: require("./Orders"),
//	customItemLibrary: require("./CustomItemLibrary"),
//	customItemOptionLibrary: require("./CustomItemOptionLibrary"),
//	customItems: require("./CustomItems"),
//	customItemOptions: require("./CustomItemOptions"),
//	relationOrderItem: require("./RelationOrder-Item"),
	users: require("./Users")
};
