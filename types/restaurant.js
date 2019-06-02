const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} = require("graphql/type");

const MenuType = new GraphQLObjectType({
  name: "Menu",
  fields: () => ({
    mType: { type: new GraphQLNonNull(GraphQLString) },
    priceRange: { type: new GraphQLNonNull(GraphQLString) }
  })
})

const Restaurant = new GraphQLObjectType({
  name: "Restaurant",
  description: "Restaurants information fro API service",
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "Restaurant id"
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Restaurant name"
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Category of the restaurant"
    },
    capacity: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Restaurant's capacity"
    },
    isopen: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Is the restaurant open?"
    },
    menu: { type: new GraphQLNonNull(MenuType) }
  })
});

module.exports = Restaurant;
