const mongoDbStore = require("connect-mongodb-session");
const expressSession = require("express-session");

function createSessionStore() {
    const MongoDBStore = mongoDbStore(expressSession);

    const store = new MongoDBStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'piekarnia-db',
        collection: 'sessions',
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: 'Secret-sessionKey',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 1000*60*60*24,
        }
    };
}

module.exports = createSessionConfig;

