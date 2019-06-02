const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
  } = require("graphql/type");
  
  const Client = new GraphQLObjectType({
    name: 'client',
    fields: () => ({
      name: {type: new GraphQLNonNull(GraphQLString)},
      id: {type: new GraphQLNonNull(GraphQLID)},
      groupid: {type: new GraphQLNonNull(GraphQLString)}
    })
  });
  
  const Group = new GraphQLObjectType({
    name: 'group',
    fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)}
    })
  });

  const ReservedGroup = new GraphQLObjectType({
    name: 'reservedgroup',
    fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)},
      startdate: {type: new GraphQLNonNull(GraphQLString)},
      enddate: {type: new GraphQLNonNull(GraphQLString)},
      groupid: {type: new GraphQLNonNull(GraphQLString)},
      restaurantid: {type: new GraphQLNonNull(GraphQLString)}
    })
  });

  module.exports = {
      Client,
      Group,
      ReservedGroup
    };
  