const axios = require("axios");
const { ldap } = require("../config/apiRoutes");
const jwt = require("jsonwebtoken");
const key = require("../config/keys").jwtKey;

const LDAPlogin = async (userName, password) => {
  const result = await axios.post(
    ldap + "?username=" + userName + "&password=" + password
  );
  var res = false;
  if (result.data) {
    var token = jwt.sign({ userId: userName }, key, {
      expiresIn: 60 * 60 * 24
    });
    res = true;
  }
  return {
    validate: res,
    userName,
    token
  };
};

module.exports = {
  LDAPlogin
};
