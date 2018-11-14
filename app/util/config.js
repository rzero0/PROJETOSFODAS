const DB_PROPS = {
    dbAddress : process.env.DBADDRESS || 'localhost:27017',
    credentials : process.env.DBCREDENTIALS,
    dbName : process.env.DBNAME || 'renadb'
};

function getDatabase() {
    return 'mongodb://localhost:27017/renadb';
}

module.exports = {
    APP_SECRET : process.env.APP_SECRET || 'renadb',
    ENV: process.env.ENVIRONMENT,
    DATABASE: getDatabase(),
    PORT: process.env.PORT,
};
