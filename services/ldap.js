const axios = require("axios");
const { ldap } = require('../config/apiRoutes');

const LDAPlogin = async (userName, password) => {
  const result = await axios.post(ldap+'?username='+userName+'&password='+password);
  var res = false;
  if(result.data){
    res = true;
  }
  return res;
};

module.exports = {
    LDAPlogin
};