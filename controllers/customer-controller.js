const Customer  = require("../models/customer-model")
const Product = require("../models/product-model");
const database = require("../database/database");
const authenticationUtility = require("../utilities/authenticate");

const flash = require("connect-flash");

function getMainPage(req, res) {
  res.render("customer/main");
}

async function getProductsPage(req, res, next) {
  let allProducts;

  try {
    allProducts = await Product.getAllProducts();
    console.log(allProducts);
    res.render("customer/portfolio", {allProducts: allProducts});
  } catch (error) {
    return next(error);
  }
}

function getContactPage(req, res) {
  res.render("customer/contact");
}

function getAboutPage(req, res) {
  res.render("customer/about");
}

function getOrdersPage(req, res) {
  res.render("customer/orders", { message: req.flash("info") });
}

async function logIn(req, res, next) {
  const customer = new Customer(req.body['user-email'], req.body['user-password']);
  
  let existingCustomer;
  try {
    existingCustomer = await customer.findByEmail();
  } catch (error) {
    return next(error);
  }

  if(!existingCustomer) {
    req.flash("info", "Użytkownik nie istnieje");
    res.redirect("/zamowienia");
    return;
  }

  const passwordsMatched = await customer.comparePasswords(existingCustomer.password);

  if(!passwordsMatched) {
    req.flash("info", "Nieprawidłowe hasło");
    res.redirect("/zamowienia");
    return;
  }

  authenticationUtility.createCustomerSessions(req, existingCustomer, function() {
    res.redirect("/zamowienia");
  })
}

function logOut(req, res) {
  authenticationUtility.deleteCustomerSessions(req);
  res.redirect("/zamowienia");
}

async function signUp(req, res, next) {
  if(!req.body["user-email"].includes("@") || req.body["user-password"].trim().length() < 5) {

  }

  const customer = new Customer(req.body['user-email'], req.body['user-password'], req.body['user-name'], req.body['user-lastname']);

  try {
    await customer.signup();
  } catch (error) {
    return next(error);
  }

  res.redirect("/zamowienia");
}

module.exports = {
  getMainPage: getMainPage,
  getProductsPage: getProductsPage,
  getContactPage: getContactPage,
  getAboutPage: getAboutPage,
  getOrdersPage: getOrdersPage,
  signUp: signUp,
  logIn: logIn,
  logOut: logOut,
};
