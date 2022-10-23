const database = require("../database/database");

class Admin {
    getAllUsers() {
        return database.getDatabase().collection("customers").find().toArray();
    }


}

module.exports = Admin;