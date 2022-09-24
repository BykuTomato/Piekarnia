const express = require("express");
const router = express.Router();

const customerController = require("../../controllers/customer-controller");

router.get("/", customerController.getMainPage);

router.get("/about", customerController.getAboutPage);

router.get("/contact", customerController.getContactPage);

router.get("/portfolio", customerController.getPortfolioPage);

module.exports = router;
