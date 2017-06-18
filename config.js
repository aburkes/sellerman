// This really needs to be seperated into it's own json file. I will... eventually.

let config = {
    database: { // Settings regarding the database connection
        // The database to use
        name: "sellerman",
        // The Database user's username
        //user: "example",
        // The database user's password
        pass: "example",
        // Database connection options. See the Sequelizer documentation for more information.
        options: {
            // Please note that many of these options are based on the default
            // sqlite 'demonstrator' options. You should almost definately
            // change them for a production environment.
            dialect: "sqlite",
            // the hostname of the database
            //host: "localhost"
            // SQLite only; comment out otherwise
            storage: "./database/sellerman.sqlite3"
        }
    },
    // default sales tax rate
    taxRate: 0.09
};

module.exports = config;




