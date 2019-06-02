const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const restaurantQuery = require("../queries/restaurantQuery");
const getRestaurant = require("../services/restaurant");

var query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurants: { type: restaurantQuery, resolve: getRestaurant }
  }
});

const schema = new GraphQLSchema({
  query
});

module.exports = schema;
