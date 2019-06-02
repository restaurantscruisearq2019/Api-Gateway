const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} = require("graphql");

const restaurantType = require("../types/restaurant");
const getRestaurant = require("../services/restaurant");

var query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurants: {
      type: new GraphQLList(restaurantType),
      resolve: getRestaurant
    }
  }
});

const schema = new GraphQLSchema({
  query
});

module.exports = schema;
