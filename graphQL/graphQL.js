const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} = require("graphql");

const restaurantType = require("../types/restaurant");
const getRestaurant = require("../services/restaurant");

var initQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurants: {
      type: new GraphQLList(restaurantType),
      resolve: getRestaurant
    }
  }
});

const schema = new GraphQLSchema({
  query: initQuery,

  //Reservation

  type: new GraphQLObjectType({
    name: 'client',
    fields: {
      name: {type: new GraphQLNonNull(GraphQLString)},
      id: {type: new GraphQLNonNull(GraphQLID)},
      groupid: {type: new GraphQLNonNull(GraphQLString)}
    }
  }),

  type: new GraphQLObjectType({
    name: 'group',
    fields: {
      id: {type: new GraphQLNonNull(GraphQLID)}
    }
  }),

  type: new GraphQLObjectType({
    name: 'reservedgroup',
    fields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      startdate: {type: new GraphQLNonNull(GraphQLString)},
      enddate: {type: new GraphQLNonNull(GraphQLString)},
      groupid: {type: new GraphQLNonNull(GraphQLString)},
      restaurantid: {type: new GraphQLNonNull(GraphQLString)}
    }
  })
});

module.exports = schema;
