const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin-controller");

router.get("/dodaj", adminController.getAddNewProductPage);

router.get("/klienci", adminController.getAllUsersPage);

router.get("/inne", adminController.getOtherPage);

router.get("/status", adminController.getOrdersStatusPage)

router.post("/dodaj", adminController.addNewProduct);

module.exports = router;
