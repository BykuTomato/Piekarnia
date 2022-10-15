const database = require("../database/database");

function getAddNewProductPage(req, res) {
    res.render("admin/new-product");
}

module.exports = {
    getAddNewProductPage: getAddNewProductPage,
}