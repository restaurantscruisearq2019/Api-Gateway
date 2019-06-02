const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");
var router = require("./routes/router");
const bodyParser = require("body-parser");
const MyGraphQLSchema = require("./graphQL/graphQL");

const cors = require("cors");

const getRestaurant = require("./services/restaurant");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/index")(app);

app.use(router);
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);
