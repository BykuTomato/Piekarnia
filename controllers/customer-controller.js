const Customer  = require("../models/customer-model")
const database = require("../database/database");
const authenticationUtility = require("../utilities/authenticate");

function getMainPage(req, res) {
  res.render("customer/main");
}

function getPortfolioPage(req, res) {
  res.render("customer/portfolio");
}

function getContactPage(req, res) {
  res.render("customer/contact");
}

function getAboutPage(req, res) {
  res.render("customer/about");
}

function getOrdersPage(req, res) {
  res.render("customer/orders");
}

async function logIn(req, res) {
  const customer = new Customer(req.body['user-email'], req.body['user-password']);
  const existingCustomer = await customer.findByEmail();

  if(!existingCustomer) {
    res.redirect("/zamowienia");
    return;
  }

  const passwordsMatched = await customer.comparePasswords(existingCustomer.password);

  if(!passwordsMatched) {
    res.redirect("/zamowienia");
    return;
  }

  authenticationUtility.createCustomerSessions(req, existingCustomer, function() {
    res.redirect("/");
  })
}

function logOut(req, res) {
  authenticationUtility.deleteCustomerSessions(req);
  res.redirect("/zamowienia");
}

async function signUp(req, res) {
  const customer = new Customer(req.body['user-email'], req.body['user-password'], req.body['user-name'], req.body['user-lastname']);

  await customer.signup();

  res.redirect("/zamowienia");
}

module.exports = {
  getMainPage: getMainPage,
  getPortfolioPage: getPortfolioPage,
  getContactPage: getContactPage,
  getAboutPage: getAboutPage,
  getOrdersPage: getOrdersPage,
  signUp: signUp,
  logIn: logIn,
  logOut: logOut,
};
