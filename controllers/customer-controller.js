const Customer  = require("../models/customer-model")

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

async function signUp(req, res) {
  const customer = new Customer(req.body['user-name'], req.body['user-lastname'], req.body['user-email'], req.body['user-password']);

  await customer.signup();

  res.redirect("/produkty");
}

module.exports = {
  getMainPage: getMainPage,
  getPortfolioPage: getPortfolioPage,
  getContactPage: getContactPage,
  getAboutPage: getAboutPage,
  getOrdersPage: getOrdersPage,
  signUp: signUp,
};
