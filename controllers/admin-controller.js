const database = require("../database/database");
const Admin = require("../models/admin-model");
const Product = require("../models/product-model");

function getAddNewProductPage(req, res) {
    res.render("admin/new-product");
}

async function addNewProduct(req, res, next) {
    const productData = req.body;
    const photoData = req.file;

    const product = new Product(productData.title, productData.description, productData.price, photoData.filename);

    try {
        await product.uploadNewProduct();
    } catch(error) {
        return next(error);
    }

    res.redirect("/admin/dodaj");
}

async function getAllUsersPage(req, res) {
    const admin = new Admin();
    const allUsers = await admin.getAllUsers();
    console.log(allUsers);

    res.render("admin/see-users", {allUsers: allUsers});
}

function getOtherPage(req, res) {
    res.render("admin/other")
}

function getOrdersStatusPage(req, res) {
    res.render("admin/orders");
}

module.exports = {
    getAddNewProductPage: getAddNewProductPage,
    addNewProduct: addNewProduct,
    getAllUsersPage: getAllUsersPage,
    getOtherPage: getOtherPage,
    getOrdersStatusPage: getOrdersStatusPage,
}