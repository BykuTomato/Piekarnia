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

module.exports = {
    getAddNewProductPage: getAddNewProductPage,
    getAllUsersPage: getAllUsersPage,
}