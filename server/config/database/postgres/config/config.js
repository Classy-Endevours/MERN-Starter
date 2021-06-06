
require('dotenv').config();
module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        use_env_variable:true
    },
    developmentDumb: {
        username: "root",
        password: null,
        database: "database_development",
        host: "127.0.0.1",
        dialect: "postgres",
        query: { raw: true },
    },
    test: {
        username: "root",
        password: null, 
        database: "database_test",
        host: "127.0.0.1",
        dialect: "postgres",
        query: { raw: true },
    },
    production: {
        url: process.env.DATABASE_URL,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<< YOU NEED THIS
            }
        },
        use_env_variable:true
    },
};
