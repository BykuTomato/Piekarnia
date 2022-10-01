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

module.exports = {
  getMainPage: getMainPage,
  getPortfolioPage: getPortfolioPage,
  getContactPage: getContactPage,
  getAboutPage: getAboutPage,
  getOrdersPage: getOrdersPage,
};
