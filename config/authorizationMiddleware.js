const { ldapURL } = require('../config/apiRoutes');
var ldap = require('express-cached-ldap');
var ntlm = require('express-ntlm');

module.exports = (id, userName, password) => ldap({
  ldapUrl: ldapURL,
  baseDN: 'cn='+userName+', ou=staffManagement, dc=restaurants',
  ldapUsername: id,
  ldapPassword: password
});
