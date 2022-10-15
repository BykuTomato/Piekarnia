function protect(req, res, next) {
    if(!res.locals.isAdmin) {
        res.redirect("/"); // proper view to be added
    }
    next();
}

module.exports = protect;