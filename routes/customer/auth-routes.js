const express = require("express");
const router = express.Router();

const customerController = require("../../controllers/customer-controller");

router.post("/rejestracja", customerController.signUp);

router.post("/logowanie", customerController.logIn);

router.post("/wyloguj", customerController.logOut);

module.exports = router;
