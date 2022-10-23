const database = require("../database/database");

class Product {
    constructor(title, description, price, photoName, _id) {
        this.title = title;
        this.description = description;
        this.price = +price;
        this.photoName = photoName; // Name of the image
        this.photoPath = `product-data/images/${photoName}`;
        this.photoUrl = `/products/assets/images/${photoName}`;
        if(_id) {
            this.id = _id.toString();
        }
    }

    static async getAllProducts() {
        const products = await database.getDatabase().collection("products").find().toArray();

        return products.map((product) => {
            return new Product(product.title, product.description, product.price, product.photoName, product._id);
        })
    }

    uploadNewProduct() {
        return database.getDatabase().collection("products").insertOne({
            title: this.title, 
            description: this.description, 
            price: this.price,
            photoName: this.photoName,
        })
    }
}


module.exports = Product;