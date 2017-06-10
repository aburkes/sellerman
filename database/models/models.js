// This just compiles all the models together.
// If you ever need more models, add them to this export.

//let Models = {customers: require("./Customers")};


module.exports = {
	Customers: require("./Customers"),
	Orders: require("./Orders"),
	CustomItemLibrary: require("./CustomItemLibrary"),
	CustomItemOptionLibrary: require("./CustomItemOptionLibrary"),
	CustomItems: require("./CustomItems"),
	CustomItemOptions: require("./CustomItemOptions"),
//	RelationOrderItem: require("./RelationOrder-Item"),
	Users: require("./Users")
};
