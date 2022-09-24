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

module.exports = {
  getMainPage: getMainPage,
  getPortfolioPage: getPortfolioPage,
  getContactPage: getContactPage,
  getAboutPage: getAboutPage,
};
