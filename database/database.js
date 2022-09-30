const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    database = client.db("piekarnia-db");
    
}

function getDatabase() {
    if(!database) {
        throw new Error("Connection to the database failed!")
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDatabase: getDatabase,
}