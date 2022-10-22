function protect(req, res, next) {
    if(!res.locals.isAdmin) {
        res.status(403).render("shared/403"); // proper view to be added
    }
    next();
}

module.exports = protect;