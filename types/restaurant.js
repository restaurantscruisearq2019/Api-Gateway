const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require("graphql/type");

const RestaurantType = new GraphQLObjectType({
  name: "Restaurant",
  description: "Restaurants information fro API service",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Restaurant id"
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Restaurant name"
    },
    category: {
      type: GraphQLString,
      description: "Category of the restaurant"
    },
    capacity: {
      type: GraphQLInt,
      description: "Restaurant's capacity"
    },
    isopen: {
      type: GraphQLBoolean,
      description: "Is the restaurant open?"
    }
    // menu: {
    //   type:
    // }
  })
});

module.exports = RestaurantType;
