const express = require("express");
const router = express.Router();

const customerController = require("../../controllers/customer-controller");

router.get("/", customerController.getMainPage);

router.get("/historia", customerController.getAboutPage);

router.get("/kontakt", customerController.getContactPage);

router.get("/produkty", customerController.getPortfolioPage);

router.get("/zamowienia", customerController.getOrdersPage);

module.exports = router;
