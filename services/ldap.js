
var authorizationMiddleware = require('../config/authorizationMiddleware');

const verifyLDAPLogin = async (id, userName, password) => {
    const res = await authorizationMiddleware(id, userName, password);
    console.log(res);
    return "res";
};

module.exports = {
    verifyLDAPLogin
};