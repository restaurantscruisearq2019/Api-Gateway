const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = require("graphql/type");

const Manager = new GraphQLObjectType({
    name: 'manager',
    fields: () => ({
        name: {type: new GraphQLNonNull(GraphQLString)},
        _id: {type: new GraphQLNonNull(GraphQLID)},
        userName: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        restaurantid: {type: new GraphQLNonNull(GraphQLString)},
        employees: { type: new GraphQLList( new GraphQLNonNull(Employee))}
    })
});

const Employee = new GraphQLObjectType({
    name: 'employee',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        office: {type: new GraphQLNonNull(GraphQLString)}
    })
});

module.exports = {
    Manager,
    Employee
};
  