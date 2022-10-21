const database = require("../database/database");

class Admin {
    getAllUsers() {
        return database.getDatabase().collection("customers").find().toArray();
    }

    async uploadNewProduct(title, description, price, photo) {
        return database.getDatabase().collection("products").insertOne({
            title: title, 
            description: description, 
            price: price
        })
    }
}

module.exports = Admin;