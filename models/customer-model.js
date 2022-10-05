const database = require("../database/database");
const bcrypt = require("bcryptjs");

class Customer {
    constructor(name, lastname, email, password) {
        this.name = name;
        this.lastname = lastname;
        this.email = email; 
        this.password = password;
    }

    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);
        
        await database.getDatabase().collection("customers").insertOne({
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: hashedPassword,
        });

        console.log("Successfully signed up");
    }
}

module.exports = Customer;