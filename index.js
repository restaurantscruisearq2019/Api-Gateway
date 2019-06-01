const express = require("express");
const app = express();
const graphqlHTTP = require('express-graphql');
var router = require('./routes/router');
const bodyParser = require('body-parser');
const MyGraphQLSchema = require('./graphQL/graphQL');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/index")(app);

app.use(router);
app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);

