function handle(req, res, next) {
    res.status(404).render("shared/404");
}

module.exports = handle;