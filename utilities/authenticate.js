function createCustomerSessions(req, user, action) {
    req.session.uid = user._id.toString();
    req.session.isAdmin = user.isAdmin;
    req.session.save(action);
}

function deleteCustomerSessions(req) {
    req.session.uid = null;
}

module.exports = {
    createCustomerSessions: createCustomerSessions,
    deleteCustomerSessions: deleteCustomerSessions,
}