require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const graphqlConf = require('../graphql');

const PORT = process.env.PORT || 4000;
// Create an express server and a GraphQL endpoint
const app = express();
const server = new ApolloServer(graphqlConf);
server.applyMiddleware({ app });

const init = () => {
  app.listen(PORT, () =>
    console.log(
      `Express GraphQL Server Now Running On localhost:${PORT}${
        server.graphqlPath
      }`
    )
  );
};

module.exports = { init, app };
