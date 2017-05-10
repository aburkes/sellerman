let config = {
    database: { // Settings regarding the database connection
        // The database to use
        name: "sellerman",
        // The Database user's username
        user: "user",
        // The database user's password
        pass: "password",
        // Database connection options. See the Sequelizer documentation for more information.
        options: {
            // Please note that many of these options are based on the default
            // sqlite 'demonstrator' options. You should almost definately
            // change them for a production environment.
            dialect: "sqlite",
            // the hostname of the database
            host: "localhost"
        }
    },
    // default sales tax rate
    taxRate: 0.09
};

module.exports = config;