const express = require("express");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull
} = require("graphql");

const app = express();

const graphqlHTTP = require("express-graphql");
var router = require("./routes/router");
const bodyParser = require("body-parser");
const MyGraphQLSchema = require("./graphQL/graphQL");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("./config/keys");
const cors = require("cors");

const { LDAPlogin } = require("./services/ldap");
const LDAPAuth = require("./types/ldapAuth");

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

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      LDAPVerify: {
        type: LDAPAuth,
        args: {
          username: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve: async (source, { username, password }) => {
          const result = await LDAPlogin(username, password);
          return result;
        }
      }
    }
  })
});

app.use(
  "/auth",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.use(function(req, res, next) {
  //console.log(req);
  try {
    //const token = req.headers.authorization.split(".")[1];
    const token = req.headers.authorization;
    console.log(token);
    jwt.verify(token, jwtKey, function(err, payload) {
      console.log(payload);
      if (payload) {
        req.user = true;
        next();
      } else {
        console.log(err);
        next();
      }
    });
  } catch (e) {
    console.log(e);
    next();
  }
});

app.use(function protectRoute(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(500).json({ error: "login is required" });
  }
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
