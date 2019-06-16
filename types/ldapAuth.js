const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = require("graphql/type");

const LDAPAuth = new GraphQLObjectType({
  name: "ldapAuth",
  fields: () => ({
    validate: { type: new GraphQLNonNull(GraphQLBoolean) },
    userName: { type: new GraphQLNonNull(GraphQLString) },
    token: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = LDAPAuth;
