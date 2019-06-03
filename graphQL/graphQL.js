const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull
} = require("graphql");

const Restaurant = require("../types/restaurant");
const { getRestaurant, getDayInfoRestaurants, getRestaurantsByCategories, getRestaurantsByPricerange, getRestaurantsByMenu } = require("../services/restaurant");
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
const DailyReservation = require("../types/reservationTransaction");
const getTodayClientReservation = require("../services/reservationTransaction");

var allGetQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurants: {
      type: new GraphQLList(Restaurant),
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async (source, { id }) => {
        const result = await getRestaurant(id);
        return result;
      }
    },
    ClientDailyReservation:{
      type: DailyReservation,
      args:{
        clientID: { type: GraphQLInt },
        date: { type: GraphQLString }
      },
      resolve: async (source, { clientID, date }) => {
        const result = await getTodayClientReservation(clientID, date);
        //console.log(result);
        return result;
      }
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
    },
    getDayInfo: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: getDayInfoRestaurants
    },
    getRestaurantsByCategories: {
      type: new GraphQLList(Restaurant),
      args: {
        category: { type: GraphQLString }
      },
      resolve: async (source, { category }) => {
        const result = await getRestaurantsByCategories(category);
        return result;
      }
    },
    getRestaurantsByPricerange: {
      type: new GraphQLList(Restaurant),
      args: {
        priceRange: { type: GraphQLString }
      },
      resolve: async (source, { priceRange }) => {
        const result = await getRestaurantsByPricerange(priceRange);
        return result;
      }
    },
    getRestaurantsByMenu: {
      type: new GraphQLList(Restaurant),
      args: {
        mType: { type: GraphQLString }
      },
      resolve: async (source, { mType }) => {
        const result = await getRestaurantsByMenu(mType);
        return result;
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: allGetQuery
});

module.exports = schema;