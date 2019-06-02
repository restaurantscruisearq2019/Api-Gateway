const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} = require("graphql");

const Restaurant = require("../types/restaurant");
const { getRestaurant, getRestaurantById } = require("../services/restaurant");
const { Client, Group, ReservedGroup } = require("../types/reservation");
const {
  getReservationClients,
  getReservationGroups,
  getReservationReservedGroups
} = require("../services/reservation");
const { Manager, Employee } = require("../types/staffManagement");
const {
  getStaffEmployees,
  getStaffManagers
} = require("../services/staffManagement");

var allGetQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurantById: {
      type: Restaurant,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async (source, { id }) => {
        const result = await getRestaurantById(id);
        return result;
      }
    },
    restaurants: {
      type: new GraphQLList(Restaurant),
      resolve: getRestaurant
    },
    clients: {
      type: new GraphQLList(Client),
      resolve: getReservationClients
    },
    groups: {
      type: new GraphQLList(Group),
      resolve: getReservationGroups
    },
    reservedgroups: {
      type: new GraphQLList(ReservedGroup),
      resolve: getReservationReservedGroups
    },
    managers: {
      type: new GraphQLList(Manager),
      resolve: getStaffManagers
    },
    employees: {
      type: new GraphQLList(Employee),
      resolve: getStaffEmployees
    }
  }
});

const schema = new GraphQLSchema({
  query: allGetQuery
});

module.exports = schema;
