function checkAuthStatus(req, res, next) {
    const uid = req.session.uid;

    if(!uid) {
        return next();
    }

    res.locals.userId = uid;
    res.locals.isAuth = true;
    next();
}

module.exports = checkAuthStatus;