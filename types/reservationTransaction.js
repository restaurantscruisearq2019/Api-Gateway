const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} = require("graphql/type");

const Meal = new GraphQLObjectType({
    name: 'Meal',
    fields: () => ({
      name: {type: new GraphQLNonNull(GraphQLString)},
      hour: {type: new GraphQLNonNull(GraphQLString)}
    })
});

const DailyReservation = new GraphQLObjectType({
    name: 'DailyReservation',
    fields: () => ({
      breakfast: {type: new GraphQLNonNull(Meal)},
      lunch: {type: new GraphQLNonNull(Meal)},
      dinner: {type: new GraphQLNonNull(Meal)}
    })
});

module.exports = DailyReservation;


