'use strict';

var express = require('express');
var express_graphql = require('express-graphql');

var schema = require('./graphql/schema');
var resolvers = require('./graphql/resolvers');

var PORT = process.env.PORT || 4000;
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));
app.listen(PORT, function () {
  return console.log('Express GraphQL Server Now Running On localhost:' + PORT + '/graphql');
});