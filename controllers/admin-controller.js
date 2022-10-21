const database = require("../database/database");
const Admin = require("../models/admin-model");

function getAddNewProductPage(req, res) {
    res.render("admin/new-product");
}

async function getAllUsersPage(req, res) {
    const admin = new Admin();
    const allUsers = await admin.getAllUsers();
    console.log(allUsers);

    res.render("admin/see-users", {allUsers: allUsers});
}

async function addNewProduct(req, res) {
    const productData = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    }
    console.log(productData);

    const admin = new Admin();
    await admin.uploadNewProduct(productData.title, productData.description, productData.price);

    res.render("admin/new-product");
}

module.exports = {
    getAddNewProductPage: getAddNewProductPage,
    getAllUsersPage: getAllUsersPage,
    addNewProduct: addNewProduct,
}