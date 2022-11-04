const database = require("../database/database");

class Admin {
  getAllUsers() {
    return database
      .getDatabase()
      .collection("customers")
      .find()
      .sort({ isAdmin: -1 })
      .toArray();
  }
}

module.exports = Admin;
