const database = require("../database/database");
const bcrypt = require("bcryptjs");

class Customer {
    constructor(email, password, name, lastname) {
        this.email = email; 
        this.password = password;
        this.name = name;
        this.lastname = lastname;
    }

    async login() {

    }

    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);

        
        
        await database.getDatabase().collection("customers").insertOne({
            email: this.email,
            password: hashedPassword,
            name: this.name,
            lastname: this.lastname,
        });

        console.log("Successfully signed up");
    }

    showAllProducts() {
        return database.getDatabase().collection("products").find().toArray();
    }

    findByEmail() {
        return database.getDatabase().collection("customers").findOne({email: this.email});
    }

    comparePasswords(hashedPassword) {
        return bcrypt.compare(this.password, hashedPassword);   
    }
}

module.exports = Customer;