const database = require("../database/database");
const bcrypt = require("bcryptjs");

class Customer {
    constructor(name, lastname, email, password) {
        this.name = name;
        this.lastname = lastname;
        this.email = email; 
        this.password = password;
    }

    async register() {
        const hashedPassword = bcrypt.hash(this.password, 10);

        await database.getDatabase().collection("customers").insertOne({
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: hashedPassword,
        })
    }
}